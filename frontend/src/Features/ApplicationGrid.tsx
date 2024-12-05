import { useState } from "react";
import Button from "../ui/Button";
import Tabs from "../ui/Tabs";
import JobCards from "../ui/JobCards";

const tabs = ["All", "Applied", "Interviewing", "Offered", "Rejected"];

function ApplicationGrid() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div className="flex items-center justify-between border-b pb-2">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <Button variant="primary" label="Add New" />
      </div>

      {/* Job Cards Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCards activeTab={activeTab} />
      </div>
    </div>
  );
}

export default ApplicationGrid;
