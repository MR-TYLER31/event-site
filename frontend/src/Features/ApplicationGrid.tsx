import { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";

const tabs = ["Applied Jobs", "Interviewing", "Offered", "Rejected"];

function ApplicationGrid() {
  const [activeTab, setActiveTab] = useState("Applied Jobs");
  const [jobs, setJobs] = useState([]);

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
      {/* Tab Navigation */}
      <div className="flex items-center justify-between border-b pb-2">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium ${
                activeTab === tab
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-600 hover:text-teal-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button variant="primary" label="Add New" />
      </div>

      {/* Job Cards Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition min-h-96"
          >
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {job.salary}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {job.status}
            </p>
            <p className="text-gray-500 text-sm">{job.category}</p>
            <div className="mt-4">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                View Job
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplicationGrid;
