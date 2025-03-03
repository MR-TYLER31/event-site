import axios from "axios";

const BASE_URL = "https://jsearch.p.rapidapi.com";
const API_KEY = import.meta.env.VITE_API_KEY;

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
};

export const searchJobs = async (query: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search`, {
      headers,
      params: {
        query,
        page: 1,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching jobs from JSearch API:", error);
    throw error;
  }
};
