import { useState } from "react";
import Tabs from "../ui/Tabs";
import JobCards from "../ui/JobCards";
import Modal from "../ui/Modal";
import AddJobForm from "../ui/AddJobForm";

const tabs = ["All", "Applied", "Interviewing", "Offered", "Rejected"];

function ApplicationGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div className="flex items-center justify-between border-b pb-2">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <button onClick={() => setIsModalOpen(true)}>Add new</button>
      </div>

      {/* Job Cards Grid */}
      <JobCards activeTab={activeTab} />

      <button onClick={openModal}>Add Job</button>
      {isModalOpen && (
        <Modal>
          <AddJobForm closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default ApplicationGrid;
