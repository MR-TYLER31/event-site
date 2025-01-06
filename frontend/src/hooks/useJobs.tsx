import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../api/jobsApi";
import { Job } from "../types/jobTypes";

export function useJobs() {
  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: getJobs,
    retry: false,
  });
}
