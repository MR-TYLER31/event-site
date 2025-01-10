import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import { Job } from "../types/jobTypes";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

type JobCardProps = {
  job: Job;
};

export function KanbanCard({ job }: JobCardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.job_id,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
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
        <div className="absolute top-10 right-0 bg-white border rounded-lg shadow-lg w-24">
          <ul className="text-sm text-gray-700">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                // onEdit(job);
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

      <h3 className="font-medium text-black">{job.job_title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{job.employer_name}</p>
    </div>
  );
}
