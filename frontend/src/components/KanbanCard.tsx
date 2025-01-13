import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import type { Job, Column as ColumnType } from "../types/jobTypes";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import Modal from "./Modal";
import JobForm from "./JobForm";

type JobCardProps = {
  job: Job;
  column: ColumnType;
};

export function KanbanCard({ job, column }: JobCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const queryClient = useQueryClient();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.job_id,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  function openEditModal() {
    setModalType("edit");
    setIsEditModalOpen(true);
    setSelectedJob(job);
  }

  function closeModal() {
    setIsEditModalOpen(false);
    setSelectedJob(null);
  }

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Define the delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (jobId: number) => {
      console.log(`Deleting job with ID: ${jobId}`);
      await axios.delete(`http://127.0.0.1:5000/delete-job/${jobId}/`);

      await delay(500);
    },
    onSuccess: async () => {
      await delay(2000);
      toast.success("Job successfully deleted");
      // Invalidate the jobs query to refresh the list
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.log("Failed to delete the job:", error);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(job.job_id);
  };

  return (
    <div
      ref={setNodeRef}
      {...(isEditModalOpen ? {} : listeners)}
      {...(isEditModalOpen ? {} : attributes)}
      className={`relative cursor-grab rounded-lg ${transform ? "bg-teal-100" : "bg-white"} h-32 border-l-4 border-teal-500 py-6 px-2 shadow-sm hover:shadow-md`}
      style={style}
    >
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-neutral-200 focus:outline-none"
        aria-label="More options"
      >
        <MoreVertIcon className="text-neutral-400 hover:text-neutral-600" />
      </button>
      {menuOpen && (
        <div
          className="absolute top-10 right-0 bg-white border rounded-lg shadow-lg w-24"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <ul className="text-sm text-gray-700">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                openEditModal();
                setMenuOpen(false);
              }}
            >
              Edit
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-red-100 text-red-600"
              onClick={() => {
                setIsDeleteModalOpen(true);
                setMenuOpen(false);
              }}
            >
              Delete
            </li>
          </ul>
        </div>
      )}

      <h3 className="font-medium text-black">{job.job_title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{job.employer_name}</p>

      {isDeleteModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 "
          onPointerDown={(e) => e.stopPropagation()}
        >
          <div className="bg-white p-6 rounded shadow-lg">
            <h4 className="text-lg font-bold mb-4">
              Are you sure you want to delete "{job.job_title}"?
            </h4>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 border rounded hover:bg-gray-100"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleDelete}
                disabled={deleteMutation.isPending}
              >
                {deleteMutation.isPending ? (
                  <>
                    <Spinner
                      size="w-4 h-4"
                      color="border-white"
                      margin="mr-2"
                    />
                    <span>Delete</span>
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <Modal>
          <JobForm
            closeModal={closeModal}
            modalType={modalType}
            job={selectedJob}
            status={column.id}
          />
        </Modal>
      )}
    </div>
  );
}
