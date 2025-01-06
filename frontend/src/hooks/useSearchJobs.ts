import { useQuery } from "@tanstack/react-query";
import { searchJobs } from "../api/jSearchApi";

export function useSearchJobs(query: string) {
  return useQuery({
    queryKey: ["jobs", query],
    queryFn: () => searchJobs(query),
    enabled: !!query,
  });
}
