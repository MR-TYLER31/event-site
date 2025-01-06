import axios from "axios";
import { Job } from "../types/jobTypes";

const BASE_URL = "http://127.0.0.1:5000";

export const getJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs/`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    throw new Error("Could not fetch jobs");
  }
};
