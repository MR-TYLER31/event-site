import { useDroppable } from "@dnd-kit/core";
import type { Column as ColumnType, Job } from "../types/jobTypes";
import { KanbanCard } from "./KanbanCard";

type ColumnProps = {
  column: ColumnType;
  jobs: Job[];
};

function KanbanColumn({ column, jobs }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex flex-col w-80">
      <h2 className="mb-4 py-4 pl-3 text-md rounded-lg font-light bg-slate-100 text-slate-600">
        {column.title.toUpperCase()}
      </h2>
      <div
        ref={setNodeRef}
        className="flex flex-col gap-4 rounded-lg bg-slate-100 p-2 h-[1000px]"
      >
        {jobs.map((job) => (
          <KanbanCard key={job.job_id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;
