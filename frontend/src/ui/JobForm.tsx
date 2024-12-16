import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useForm } from "react-hook-form";
import { Job } from "./JobCard";

interface JobFormInputs {
  title: string;
  company: string;
  location: string;
  salary: string;
  status: string;
  category: string;
  link: string;
  applied_date: string;
}

interface JobFormProps {
  closeModal: () => void;
  modalType: "add" | "edit";
  job: Job | null;
}

function JobForm({ closeModal, modalType, job }: JobFormProps) {
  const { register, handleSubmit, reset } = useForm<JobFormInputs>({
    defaultValues: job || {
      title: "",
      company: "",
      location: "",
      salary: "",
      status: "Applied",
      category: "",
      link: "",
      applied_date: "",
    },
  });
  const queryClient = useQueryClient();

  // Define the mutation for adding a job
  const mutation = useMutation({
    mutationFn: async (jobData: JobFormInputs) => {
      if (modalType === "add") {
        await axios.post("http://127.0.0.1:5000/add-job/", jobData);
      } else {
        await axios.put(
          `http://127.0.0.1:5000/update-job/${job?.id}/`,
          jobData
        );
      }
    },
    onSuccess: () => {
      // Invalidate the "jobs" query to refetch the job list
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      closeModal();
    },
    onError: (error) => {
      console.error("Failed to add job:", error);
    },
  });

  const handleFormSubmit = async (data: JobFormInputs) => {
    // console.log(data);
    mutation.mutate(data);
    reset();
  };

  return (
    <form
      key={job?.id || "add-job"}
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register("title", { required: true })}
          className="w-full border rounded p-2"
          placeholder="Job Title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          {...register("company", { required: true })}
          className="w-full border rounded p-2"
          placeholder="Company Name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          {...register("location", { required: true })}
          className="w-full border rounded p-2"
          placeholder="Location"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Salary
        </label>
        <input
          {...register("salary", { required: true })}
          className="w-full border rounded p-2"
          placeholder="Salary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          {...register("status", { required: true })}
          className="w-full border rounded p-2"
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          {...register("category")}
          className="w-full border rounded p-2"
          placeholder="Category"
        />
        <label className="block text-sm font-medium text-gray-700">Link</label>
        <input
          {...register("link")}
          className="w-full border rounded p-2"
          placeholder="Link"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Applied Date
        </label>
        <input
          {...register("applied_date", { required: true })}
          type="date"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={mutation.isPending}
        >
          {modalType === "add" ? "Add Job" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default JobForm;
