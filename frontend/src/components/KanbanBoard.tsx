import { useJobs } from "../hooks/useJobs";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import type {
  ApplicationStatus,
  Column as ColumnType,
  Job,
} from "../types/jobTypes";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";

type FilteredJobsByColumn = {
  [key in ApplicationStatus]: Job[];
};

const COLUMNS: ColumnType[] = [
  { id: "Applied", title: "Applied" },
  { id: "Interviewing", title: "Interviewing" },
  { id: "Offered", title: "Offered" },
  { id: "Rejected", title: "Rejected" },
];

function KanbanBoard() {
  const { data: jobs = [], isPending, isError } = useJobs();
  const [jobData, setJobData] = useState<Job[]>(jobs);

  useEffect(() => {
    if (!isPending && !isError) {
      setJobData(jobs);
    }
  }, [jobs, isPending, isError]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const jobId = active.id as number;
    const newStatus = over.id as Job["job_status"];

    setJobData((prevJobData) =>
      prevJobData?.map((job) =>
        job.job_id === jobId
          ? {
              ...job,
              job_status: newStatus,
            }
          : job
      )
    );
  }

  const filteredJobsByColumn: FilteredJobsByColumn = COLUMNS.reduce(
    (acc, column) => {
      acc[column.id] =
        jobData?.filter((job) => job.job_status === column.id) || [];

      return acc;
    },
    {} as FilteredJobsByColumn
  );

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              jobs={filteredJobsByColumn[column.id]}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
}

export default KanbanBoard;
