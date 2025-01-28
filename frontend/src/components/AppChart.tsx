import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { platform: "LinkedIn", applications: 45 },
  { platform: "Indeed", applications: 30 },
  { platform: "Glassdoor", applications: 20 },
  { platform: "ZipRecruiter", applications: 25 },
  { platform: "Other", applications: 10 },
];

const AppChart = () => {
  return (
    <div className="w-full h-[300px] p-4">
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="platform" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="applications" fill="#FF6F61" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppChart;
