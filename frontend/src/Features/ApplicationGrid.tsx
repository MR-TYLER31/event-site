import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Tabs from "../ui/Tabs";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";

const tabs = ["Applied Jobs", "Interviewing", "Offered", "Rejected"];

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

function ApplicationGrid() {
  const [activeTab, setActiveTab] = useState("Applied Jobs");
  const [jobs, setJobs] = useState<Job[]>([]);

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
    <div className="max-w-8xl mx-auto p-6">
      <div className="flex items-center justify-between border-b pb-2">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <Button variant="primary" label="Add New" />
      </div>

      {/* Job Cards Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[24rem]"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <span className="text-gray-600 italic">{job.company}</span>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <span className="font-medium text-gray-800">
                  {job.location}
                </span>

                <span className="font-medium text-gray-800">
                  <PaidIcon className="text-gray-600 mr-1" />
                  {job.salary}
                </span>
                <span className="font-medium text-gray-800">{job.status}</span>
                <span className="font-medium text-gray-800">
                  <WorkIcon className="text-gray-600 mr-1" />
                  {job.category}
                </span>
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
              <button className="px-4 py-2 border border-grey text-red-500 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplicationGrid;
