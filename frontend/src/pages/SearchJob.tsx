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
    <div>
      <JobSearchForm onSearchResults={handleSearchResults} />
      <JobTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          {jobs.map((job) => (
            <JobCard key={job.job_id} job={job} onEdit={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchJobs;
