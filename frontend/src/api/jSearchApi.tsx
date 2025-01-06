import axios from "axios";

const BASE_URL = "https://jsearch.p.rapidapi.com";
const API_KEY = "3e76306f9emsh0ea4cedab5ee4f3p106001jsn92db0427fe2f";

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
