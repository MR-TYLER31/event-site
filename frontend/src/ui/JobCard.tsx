import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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

interface JobProps {
  job: Job;
}

function JobCard({ job }: JobProps) {
  const queryClient = useQueryClient();

  // Define the delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (jobId: number) => {
      console.log(`Deleting job with ID: ${jobId}`);
      await axios.delete(`http://127.0.0.1:5000/delete-job/${jobId}/`);
    },
    onSuccess: () => {
      // Invalidate the jobs query to refresh the list
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      console.log("Failed to delete the job:", error);
    },
  });

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${job.title}?`)) {
      deleteMutation.mutate(job.id);
    }
  };

  return (
    <div
      key={job.id}
      className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[24rem]"
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
        <span className="text-gray-600 italic">{job.company}</span>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
          <span className="font-medium text-gray-800">{job.location}</span>

          <span className="font-medium text-gray-800">
            <PaidIcon className="text-gray-600 mr-1" />
            {job.salary}
          </span>
          <span className="font-medium text-gray-800">{job.status}</span>
          <span className="font-medium text-gray-800">
            <WorkIcon className="text-gray-600 mr-1" />
            {job.category}
          </span>
          <span className="font-medium text-gray-800">{job.link}</span>
          <span className="font-medium text-gray-800">
            <AccessTimeIcon className="text-gray-600 mr-1" />
            {`Applied ${job.applied_date}`}
          </span>
        </div>
      </div>
      <div className="mt-6 p-4 flex justify-start gap-6 items-center">
        <button className="px-4 py-2 border border-grey text-teal-600 rounded-lg">
          Edit
        </button>
        <button
          className="px-4 py-2 border border-grey text-red-500 rounded-lg"
          onClick={handleDelete}
          disabled={deleteMutation.isPending}
        >
          {deleteMutation.isPending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
