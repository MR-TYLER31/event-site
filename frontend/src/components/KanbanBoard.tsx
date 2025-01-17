import { useJobs } from "../hooks/useJobs";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import type {
  ApplicationStatus,
  Column as ColumnType,
  Job,
} from "../types/jobTypes";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";

import { useUpdateJobStatus } from "../hooks/useUpdateJobStatus";
import Spinner from "./Spinner";

type FilteredJobsByColumn = {
  [key in ApplicationStatus]: Job[];
};

const COLUMNS: ColumnType[] = [
  { id: "Applied", title: "Applied" },
  { id: "Application Viewed", title: "Application Viewed" },
  { id: "Interviewing", title: "Interviewing" },
  { id: "Offered", title: "Offered" },
  { id: "Rejected", title: "Rejected" },
];

function KanbanBoard() {
  const { data: jobs = [], isPending, isError } = useJobs();
  const [jobData, setJobData] = useState<Job[]>(jobs);
  const updateJobStatusMutation = useUpdateJobStatus();

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

    const currentJob = jobData.find((job) => job.job_id === jobId);

    if (currentJob?.job_status === newStatus) return;

    const updatedData = jobData.map((job) =>
      job.job_id === jobId ? { ...job, job_status: newStatus } : job
    );

    setJobData(updatedData);

    updateJobStatusMutation.mutate({ jobId, newStatus });
  }

  const filteredJobsByColumn: FilteredJobsByColumn = COLUMNS.reduce(
    (acc, column) => {
      acc[column.id] =
        jobData?.filter((job) => job.job_status === column.id) || [];

      return acc;
    },
    {} as FilteredJobsByColumn
  );

  if (isPending)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
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
  );
}

export default KanbanBoard;
