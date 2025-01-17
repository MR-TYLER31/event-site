import { useState } from "react";
import JobSearchForm from "../components/JobSearchForm";
import JobTabs from "../components/JobTabs";
import { Job } from "../types/jobTypes";
import JobCard from "../components/JobCard";

function SearchJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleSearchResults = (searchResults: Job[]) => {
    setJobs(searchResults);
  };

  return (
    <div className="flex flex-col h-full mt-6">
      <JobSearchForm onSearchResults={handleSearchResults} />
      <JobTabs />
      <div className="w-1/4 border-r bg-white overflow-y-auto">
        {jobs.map((job) => (
          <JobCard key={job.job_id} job={job} onEdit={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default SearchJobs;
