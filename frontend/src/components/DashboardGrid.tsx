import AppChart from "./AppChart";
import DashboardTable from "./DashboardTable";
import JobOutcomeCard from "./JobOutcomeCard";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
      <div className="flex lg:col-span-2 flex-col items-center p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">Total Applications</h2>
        <p className="text-4xl font-bold text-secondaryColor">57</p>
        <span className="text-sm text-gray-500">5 applications this week</span>
      </div>
      <div className="flex flex-col lg:col-span-2 items-center p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">Active Applications</h2>
        <p className="text-4xl font-bold text-secondaryColor">20</p>
        <span className="text-sm text-gray-500">
          3 applications moved to interview stage this week
        </span>
      </div>
      <div className="flex flex-col lg:col-span-2 items-center p-6 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold">Interviews Scheduled</h2>
        <p className="text-4xl font-bold text-secondaryColor">3</p>
        <span className="text-sm text-gray-500">
          2 interviews scheduled for next week
        </span>
      </div>

      <div className="text-xl lg:col-span-4 p-4 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold mb-4">
            Applications by Platform
          </h2>
          <div className="flex space-x-2">
            <button className="py-1 px-3 bg-white border text-sm rounded-lg">
              Last 7 Days
            </button>
            <button className="py-1 px-3 bg-white border text-sm rounded-lg">
              Last 30 Days
            </button>
            <button className="py-1 px-3 bg-white border text-sm rounded-lg">
              Custom
            </button>
          </div>
        </div>
        <AppChart />
      </div>
      <JobOutcomeCard />
      <div className="text-xl lg:col-span-2 p-4 bg-white rounded-lg shadow">
        Applications by Category
      </div>
      <div className="lg:col-span-4 flex flex-col p-4 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold mb-4">Saved Jobs</h2>
          <button className="text-sm text-blue-600">View All</button>
        </div>
        <DashboardTable />
      </div>
    </div>
  );
}

export default DashboardGrid;
