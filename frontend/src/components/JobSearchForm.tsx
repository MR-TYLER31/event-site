import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchJobs } from "../hooks/useSearchJobs";
import { Job } from "../types/jobTypes";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type FormValues = {
  jobTitle: string;
  location: string;
};

type JobSearchFormProps = {
  onSearchResults: (job: Job[]) => void;
};

function JobSearchForm({ onSearchResults }: JobSearchFormProps) {
  const [query, setQuery] = useState<string>("");
  const { register, handleSubmit } = useForm<FormValues>();
  const { data: jobs, isError } = useSearchJobs(query);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const queryString =
      `${data.jobTitle || ""}${data.location ? ` in ${data.location}` : ""}`.trim();

    setQuery(queryString);
  };

  if (jobs?.data) {
    onSearchResults(jobs.data);
  }

  return (
    <>
      <div className="flex justify-center">
        {isError && (
          <p className="text-red-500">Failed to fetch jobs. Try again later.</p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-1/2 items-center justify-between space-x-4 bg-white border-2 border-black shadow-lg rounded-lg px-4 py-2"
        >
          <SearchIcon />
          <input
            type="text"
            {...register("jobTitle")}
            placeholder="Job title, keywords, or company"
            className="w-full border-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400"
          />
          |
          <LocationOnIcon />
          <input
            type="text"
            {...register("location")}
            placeholder="Location"
            className="w-full border-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default JobSearchForm;
