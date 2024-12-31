import { useQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import axios from "axios";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import ErrorLoading from "./ErrorLoading";

interface Job {
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

interface JobCardsProps {
  activeTab: string;
}

function JobCards({
  activeTab,
  onEdit,
}: JobCardsProps & { onEdit: (job: Job) => void }) {
  const {
    data: jobs = [],
    isPending,
    isError,
  } = useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await axios.get("http://127.0.0.1:5000/jobs/");
      return response.data; // Assuming this is the array of jobs
    },
    retry: false,
  });

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
