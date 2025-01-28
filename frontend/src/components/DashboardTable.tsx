function DashboardTable() {
  return (
    <div>
      {" "}
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
  );
}

export default DashboardTable;
