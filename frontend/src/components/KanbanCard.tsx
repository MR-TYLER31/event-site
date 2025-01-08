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
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-white border-l-2 py-6 px-2 shadow-sm hover:shadow-md"
      style={style}
    >
      <h3 className="font-medium text-black">{job.job_title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{job.employer_name}</p>
    </div>
  );
}
