function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr] h-screen">
      <div className="row-span-2 bg-gray-800 text-white p-4">Sidebar</div>
      <div className="bg-gray-700 text-white p-4">Header</div>
      <div className="p-4">Main Content</div>
    </div>
  );
}

export default AppLayout;
