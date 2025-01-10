import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useForm } from "react-hook-form";
import { Job } from "../types/jobTypes";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

interface JobFormInputs {
  job_title: string;
  employer_name: string;
  job_location: string;
  job_salary: string;
  job_status: string;
  job_employment_type: string;
  job_apply_link: string;
  applied_date: string;
}

interface JobFormProps {
  closeModal: () => void;
  modalType: "add" | "edit";
  job: Job | null;
  status: string;
}

function JobForm({ closeModal, modalType, job, status }: JobFormProps) {
  const { register, handleSubmit, reset } = useForm<JobFormInputs>({
    defaultValues: job || {
      job_title: "",
      employer_name: "",
      job_location: "",
      job_salary: "",
      job_status: status,
      job_employment_type: "",
      job_apply_link: "",
      applied_date: "",
    },
  });
  const queryClient = useQueryClient();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Define the mutation for adding a job
  const mutation = useMutation({
    mutationFn: async (jobData: JobFormInputs) => {
      if (modalType === "add") {
        await axios.post("http://127.0.0.1:5000/add-job/", jobData);
      } else {
        await axios.put(
          `http://127.0.0.1:5000/update-job/${job?.job_id}/`,
          jobData
        );
      }
      await delay(500);
    },
    onSuccess: async () => {
      await delay(2000);
      if (modalType === "add") {
        toast.success("Job successfully added");
      } else {
        toast.success("Job successfully updated");
      }

      // Invalidate the "jobs" query to refetch the job list
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      closeModal();
    },
    onError: (error) => {
      console.error("Failed to add job:", error);
    },
  });

  const handleFormSubmit = async (data: JobFormInputs) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <form
      key={job?.job_id || "add-job"}
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            {...register("job_title", { required: true })}
            className="w-full border rounded p-2"
            placeholder="Job Title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            {...register("employer_name", { required: true })}
            className="w-full border rounded p-2"
            placeholder="Company Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            {...register("job_location", { required: true })}
            className="w-full border rounded p-2"
            placeholder="Location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Salary
          </label>
          <input
            {...register("job_salary", { required: true })}
            className="w-full border rounded p-2"
            placeholder="Salary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            {...register("job_employment_type")}
            className="w-full border rounded p-2"
            placeholder="Category"
          />
          <label className="block text-sm font-medium text-gray-700">
            Link
          </label>
          <input
            {...register("job_apply_link")}
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
          className="bg-black text-white px-4 py-2 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={mutation.isPending}
        >
          {mutation.isPending && (
            <Spinner size="w-4 h-4" color="border-white" margin="mr-2" />
          )}
          {mutation.isPending
            ? modalType === "add"
              ? "Adding Job"
              : "Saving"
            : modalType === "add"
              ? "Add Job"
              : "Save"}
        </button>
      </div>
    </form>
  );
}

export default JobForm;
