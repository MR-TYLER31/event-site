import { useState } from "react";
import { useSearchJobs } from "../hooks/useSearchJobs";
import { Job } from "../types/jobTypes";

function SearchJobs() {
  const [query, setQuery] = useState("");
  const { data: jobs, isError } = useSearchJobs(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jobs"
        />
        <button type="submit">Search</button>
      </form>

      {isError && <p>Failed to fetch jobs. Try again later.</p>}

      <ul>
        {jobs?.data?.map((job: Job) => (
          <li key={job.job_id}>
            <h3>{job.job_title}</h3>
            <p>{job.employer_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchJobs;
