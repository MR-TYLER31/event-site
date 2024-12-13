import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";

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

function JobCards({ activeTab }: JobCardsProps) {
  const {
    data: jobs = [],
    isPending,
    isError,
    error,
  } = useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await axios.get("http://127.0.0.1:5000/jobs/");
      return response.data; // Assuming this is the array of jobs
    },
  });

  const filteredJobs =
    activeTab === "All" ? jobs : jobs.filter((job) => job.status === activeTab);

  if (isPending) return <div>Loading jobs...</div>;
  if (isError)
    return (
      <div>
        Error loading jobs: {(error as Error).message || "Something went wrong"}
      </div>
    );

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobCards;
