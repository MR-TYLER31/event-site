import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type UpdateJobStatusParams = {
  jobId: number;
  newStatus: string;
};

export function useUpdateJobStatus() {
  const queryClient = useQueryClient();
  // Send the request to the backend
  const mutation = useMutation({
    mutationFn: async ({ jobId, newStatus }: UpdateJobStatusParams) => {
      await axios.put(`http://127.0.0.1:5000/update-job-status/${jobId}/`, {
        job_status: newStatus,
      });
    },
    onSuccess: async () => {
      toast.success("Job status updated successfully");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: (error) => {
      toast.error("Failed to update job status");
      console.error("Failed to update job status:", error);
    },
  });
  return mutation;
}
