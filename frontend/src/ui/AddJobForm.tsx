import { useForm, SubmitHandler } from "react-hook-form";

interface JobFormInputs {
  title: string;
  company: string;
  location: string;
  salary: string;
  status: string;
  category: string;
  applied_date: string;
}

interface AddJobFormProps {
  //   onSubmit: SubmitHandler<JobFormInputs>;
  closeModal: () => void;
}

function AddJobForm({ closeModal }: AddJobFormProps) {
  const { register, handleSubmit, reset } = useForm<JobFormInputs>();

  const handleFormSubmit = (data: JobFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
          {...register("location")}
          className="w-full border rounded p-2"
          placeholder="Location"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Salary
        </label>
        <input
          {...register("salary")}
          className="w-full border rounded p-2"
          placeholder="Salary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select {...register("status")} className="w-full border rounded p-2">
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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Applied Date
        </label>
        <input
          {...register("applied_date")}
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
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddJobForm;
