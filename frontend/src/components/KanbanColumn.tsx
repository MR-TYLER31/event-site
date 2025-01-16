import { useDroppable } from "@dnd-kit/core";
import type { Column as ColumnType, Job } from "../types/jobTypes";
import { KanbanCard } from "./KanbanCard";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import JobForm from "./JobForm";
import Modal from "./Modal";

type ColumnProps = {
  column: ColumnType;
  jobs: Job[];
};

function KanbanColumn({ column, jobs }: ColumnProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
  });

  function openAddModal() {
    setModalType("add");
    setIsModalOpen(true);
    setSelectedJob(null);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedJob(null);
  }

  return (
    <div className="flex flex-col w-[20rem] min-w-[20rem]">
      <div className="flex justify-between items-center mb-4 py-4 px-3 text-md rounded-lg font-light bg-slate-100 text-slate-600">
        <div className="flex items-center gap-4">
          <h2>{column.title.toUpperCase()}</h2>
          <p className="flex items-center justify-center bg-red-100 text-red-400 rounded-full h-7 w-7">
            {jobs.length}
          </p>
        </div>

        <button onClick={openAddModal} className="flex items-center">
          <AddIcon />
        </button>
      </div>

      <div
        ref={setNodeRef}
        className={`flex flex-col gap-4 ${isOver ? "bg-slate-200" : "bg-slate-100"} rounded-lg p-2 h-[1000px]`}
      >
        {jobs.map((job) => (
          <KanbanCard key={job.job_id} job={job} column={column} />
        ))}
      </div>

      {isModalOpen && (
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

export default KanbanColumn;
