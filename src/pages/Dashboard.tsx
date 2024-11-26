import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [jobs, setJobs] = useState("");
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://127.0.0.1:5000/dashboard/");
      console.log(response.data);
      const { message } = { ...response.data };
      setJobs(message);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{jobs}</p>
    </div>
  );
}

export default Dashboard;
