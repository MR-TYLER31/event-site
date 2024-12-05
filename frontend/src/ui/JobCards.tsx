import { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";

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
  const [jobs, setJobs] = useState<Job[]>([]);
  const filteredJobs =
    activeTab === "All" ? jobs : jobs.filter((job) => job.status === activeTab);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/jobs/");
        console.log(response.data); // Inspect the structure of the data
        setJobs(response.data); // Assuming response.data is the array of jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);
  return (
    <>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
}

export default JobCards;
