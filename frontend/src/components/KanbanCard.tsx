import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import { Job } from "../types/jobTypes";

type JobCardProps = {
  job: Job;
};

export function KanbanCard({ job }: JobCardProps) {
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
      className={`cursor-grab rounded-lg ${transform && "bg-teal-50"} bg-white border-l-4 border-teal-500 py-6 px-2 shadow-sm hover:shadow-md`}
      style={style}
    >
      <h3 className="font-medium text-black">{job.job_title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{job.employer_name}</p>
    </div>
  );
}
