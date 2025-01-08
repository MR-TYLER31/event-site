import { useState } from "react";

function JobTabs() {
  const [activeTab, setActiveTab] = useState("jobsForYou");

  return (
    <div className="w-full p-4">
      <div className="flex justify-center space-x-12 border-b-2">
        <button
          className={`px-6 py-2 text-lg  ${activeTab === "jobsForYou" ? "font-medium border-teal-600 text-teal-600" : "font-light border-transparent text-grey-500"} border-b-4 transition-all`}
          onClick={() => setActiveTab("jobsForYou")}
        >
          Jobs for you
        </button>
        <button
          className={`px-6 py-2 text-lg ${activeTab === "recentSearches" ? "font-medium border-teal-600 text-teal-600" : "font-light border-transparent text-grey-50"} border-b-4 transition-all`}
          onClick={() => setActiveTab("recentSearches")}
        >
          Recent Searches
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "jobsForYou" && (
          <div>
            <h2 className="text-lg font-semibold">Jobs for You</h2>
            <p className="text-gray-600">
              Here are some job recommendations for you!
            </p>
          </div>
        )}
      </div>

      <div className="mt-4">
        {activeTab === "recentSearches" && (
          <div>
            <h2 className="text-lg font-semibold">Recent Searches</h2>
            <p className="text-gray-600">Check out your recent job searches</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobTabs;
