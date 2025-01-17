import { Job } from "../types/jobTypes";

interface JobProps {
  job: Job;
  onEdit: (job: Job) => void;
}

function JobCard({ job }: JobProps) {
  return (
    <div className="m-4 p-2 cursor-pointer border border-gray-300  rounded-lg shadow hover:border-teal-600 transition flex flex-col min-h-[10rem]">
      <h3 className="text-lg font-semibold text-teal-800">{job.job_title}</h3>
      <p className="text-gray-600 italic">{job.employer_name}</p>
      <p className="font-medium text-gray-800">{job.job_location}</p>
      <p className="font-medium text-gray-800">{job.job_publisher}</p>
      <p className="font-medium text-gray-800">
        {job.job_is_remote ? "Remote" : "Onsite"}
      </p>
    </div>
  );
}

export default JobCard;
