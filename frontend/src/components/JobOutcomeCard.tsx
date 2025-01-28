import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const jobOutcomesData = [
  { name: "Offers Received", value: 3 },
  { name: "Interviews Attended", value: 15 },
  { name: "Rejections", value: 20 },
  { name: "Pending Applications", value: 10 },
];

const COLORS = ["#FF6F61", "#FFCE56", "#4BC0C0", "#36A2EB"];

function JobOutcomeCard() {
  return (
    <div className="text-xl lg:col-span-2 bg-white p-4 rounded-lg shadow-lg w-100">
      <h2 className="text-lg font-semibold mb-4">Job Outcomes</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={jobOutcomesData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {jobOutcomesData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default JobOutcomeCard;
