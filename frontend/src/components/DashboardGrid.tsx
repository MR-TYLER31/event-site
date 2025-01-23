function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
      <div className="flex lg:col-span-2 flex-col items-center p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">Total Applications</h2>
        <p className="text-4xl font-bold text-blue-600">57</p>
        <span className="text-sm text-gray-500">5 applications this week</span>
      </div>
      <div className="flex flex-col lg:col-span-2 items-center p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">Active Applications</h2>
        <p className="text-4xl font-bold text-blue-600">20</p>
        <span className="text-sm text-gray-500">
          3 applications moved to interview stage this week
        </span>
      </div>
      <div className="flex flex-col lg:col-span-2 items-center p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">Interviews Scheduled</h2>
        <p className="text-4xl font-bold text-blue-600">3</p>
        <span className="text-sm text-gray-500">
          2 interviews scheduled for next week
        </span>
      </div>

      <div className="text-xl lg:col-span-4 p-4 bg-white rounded-lg shadow">
        Applications Over Time
      </div>
      <div className="text-xl lg:col-span-2 p-4 bg-white rounded-lg shadow">
        Job Outcomes
      </div>

      <div className="text-xl lg:col-span-2 p-4 bg-white rounded-lg shadow">
        Applications by Category
      </div>
      <div className="lg:col-span-4 flex flex-col p-4 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold mb-4">Saved Jobs</h2>
          <button className="text-sm text-blue-600">View All</button>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="border-b">
            <tr>
              <th className="pb-2">Platform</th>
              <th className="pb-2">Job Title</th>
              <th className="pb-2">Company</th>
              <th className="pb-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">LinkedIn</td>
              <td>Front-End Developer</td>
              <td>Google</td>
              <td>Jan 31</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">ZipRecruiter</td>
              <td>Software Engineer</td>
              <td>Amazon</td>
              <td>Feb 5</td>
            </tr>
            <tr>
              <td className="py-2">Indeed</td>
              <td>Data Analyst</td>
              <td>Meta</td>
              <td>Feb 15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardGrid;
