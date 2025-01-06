import { ErrorBoundary } from "react-error-boundary";
import { Job } from "../types/jobTypes";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import ErrorLoading from "./ErrorLoading";
import { useJobs } from "../hooks/useJobs";

interface JobCardsProps {
  activeTab: string;
}

function JobCards({
  activeTab,
  onEdit,
}: JobCardsProps & { onEdit: (job: Job) => void }) {
  const { data: jobs = [], isPending, isError } = useJobs();

  const filteredJobs =
    activeTab === "All" ? jobs : jobs.filter((job) => job.status === activeTab);

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="w-20 h-20" color="border-teal-500" />
      </div>
    );

  const ErrorFallback = ({ error }: { error: Error }) => (
    <ErrorLoading message={error.message || "Something went wrong"} />
  );

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div>
            <ErrorLoading />
          </div>
        </ErrorBoundary>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default JobCards;
