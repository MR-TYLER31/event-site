import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string; // or number
  status: string;
  category: string;
  link: string;
  applied_date: string; // or Date
}

interface JobProps {
  job: Job;
  onEdit: (job: Job) => void;
}

function JobCard({ job, onEdit }: JobProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const queryClient = useQueryClient();

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
      // Invalidate the jobs query to refresh the list
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.log("Failed to delete the job:", error);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(job.id);
  };

  return (
    <div className="relative border border-black rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[24rem]">
      {/* Dropdown Menu */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-gray-500 hover:text-gray-700"
        >
          <MoreVertIcon />
        </button>
        {menuOpen && (
          <div className="absolute top-8 right-0 bg-white border rounded-lg shadow-lg w-24">
            <ul className="text-sm text-gray-700">
              <li
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onEdit(job);
                  setMenuOpen(false);
                }}
              >
                Edit
              </li>
              <li
                className="px-4 py-2 cursor-pointer hover:bg-red-100 text-red-600"
                onClick={() => {
                  setIsOpenModal(true);
                  setMenuOpen(false);
                }}
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
        <span className="text-gray-600 italic">{job.company}</span>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
          <span className="font-medium text-gray-800">{job.location}</span>

          <span className="font-medium text-gray-800">
            <PaidIcon className="text-gray-600 mr-1" />
            {job.salary}
          </span>
          <span className="font-medium text-gray-800">{job.status}</span>
          <span className="font-medium text-gray-800">
            <WorkIcon className="text-gray-600 mr-1" />
            {job.category}
          </span>
          <span className="font-medium text-gray-800">{job.link}</span>
          <span className="font-medium text-gray-800">
            <AccessTimeIcon className="text-gray-600 mr-1" />
            {`Applied ${job.applied_date}`}
          </span>
        </div>
      </div>
      <div className="mt-6 p-4 flex justify-start gap-6 items-center">
        {/* <button
          className="px-4 py-2 border border-grey text-teal-600 rounded-lg"
          onClick={() => onEdit(job)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-100  text-red-700 rounded-lg"
          onClick={() => setIsOpenModal((show) => !show)}
        >
          Delete
        </button> */}

        {/* Confirmation Modal */}
        {isOpenModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white p-6 rounded shadow-lg">
              <h4 className="text-lg font-bold mb-4">
                Are you sure you want to delete "{job.title}"?
              </h4>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setIsOpenModal((show) => !show)}
                >
                  Cancel
                </button>
                <button
                  // className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
      </div>
    </div>
  );
}

export default JobCard;
