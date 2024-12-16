import { useState } from "react";
import Tabs from "../ui/Tabs";
import JobCards from "../ui/JobCards";
import Modal from "../ui/Modal";
import JobForm from "../ui/JobForm";
import { Job } from "../ui/JobCard";

const tabs = ["All", "Applied", "Interviewing", "Offered", "Rejected"];

function ApplicationGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const openAddModal = () => {
    setModalType("add");
    setIsModalOpen(true);
    setSelectedJob(null);
  };

  const openEditModal = (job: Job) => {
    setModalType("edit");
    setIsModalOpen(true);
    setSelectedJob(job);
  };

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div className="flex items-center justify-between border-b pb-2">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded"
          onClick={openAddModal}
        >
          Add new
        </button>
      </div>

      {/* Job Cards Grid */}
      <JobCards activeTab={activeTab} onEdit={openEditModal} />

      {isModalOpen && (
        <Modal>
          <JobForm
            closeModal={closeModal}
            modalType={modalType}
            job={selectedJob}
          />
        </Modal>
      )}
    </div>
  );
}

export default ApplicationGrid;
