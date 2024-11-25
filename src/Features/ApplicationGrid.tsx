import React, { useState } from "react";
import Button from "../ui/Button";

const tabs = ["Suggested Jobs", "Applied Jobs", "Saved Jobs"];

const ApplicationGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Applied Jobs");

  // Example job data (replace with your actual data)
  const jobs = [
    {
      id: 1,
      title: "Lead Software Engineer (Front End)",
      company: "Capital One",
      location: "Norfolk, VA",
      salary: "$100K - $140K",
      type: "Full-Time",
      link: "#",
    },
    {
      id: 2,
      title: "Senior Developer Point of Sale",
      company: "Cambridge Consulting Group LLC",
      location: "Austin, TX",
      salary: "$80 - $140/hr",
      type: "Contractor",
      link: "#",
    },
    {
      id: 3,
      title: "Lead React.js Developer (Remote, EST)",
      company: "Cloud7Works",
      location: "Remote, OR",
      salary: "$100K - $180K",
      type: "Full-Time",
      link: "#",
    },
    {
      id: 3,
      title: "Lead React.js Developer (Remote, EST)",
      company: "Cloud7Works",
      location: "Remote, OR",
      salary: "$100K - $180K",
      type: "Full-Time",
      link: "#",
    },
    {
      id: 1,
      title: "Lead Software Engineer (Front End)",
      company: "Capital One",
      location: "Norfolk, VA",
      salary: "$100K - $140K",
      type: "Full-Time",
      link: "#",
    },
    {
      id: 2,
      title: "Senior Developer Point of Sale",
      company: "Cambridge Consulting Group LLC",
      location: "Austin, TX",
      salary: "$80 - $140/hr",
      type: "Contractor",
      link: "#",
    },
    {
      id: 3,
      title: "Lead React.js Developer (Remote, EST)",
      company: "Cloud7Works",
      location: "Remote, OR",
      salary: "$100K - $180K",
      type: "Full-Time",
      link: "#",
    },
    {
      id: 3,
      title: "Lead React.js Developer (Remote, EST)",
      company: "Cloud7Works",
      location: "Remote, OR",
      salary: "$100K - $180K",
      type: "Full-Time",
      link: "#",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex border-b pb-2">
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
        <Button variant="primary" label="Add New" className="ml-auto" />
      </div>

      {/* Job Cards Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition min-h-96"
          >
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {job.salary}
            </p>
            <p className="text-gray-500 text-sm">{job.type}</p>
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
};

export default ApplicationGrid;
