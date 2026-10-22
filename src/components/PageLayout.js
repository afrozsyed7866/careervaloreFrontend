import React from "react";

const PageLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-5">
      {/* First Section */}
      <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
        {/* First Box */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Box 1</h2>
          <p>This is the content of the first box inside the first section.</p>
        </div>
        {/* Second Box */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Box 2</h2>
          <p>This is the content of the second box inside the first section.</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="col-span-12 md:col-span-6 bg-blue-100 p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Second Section</h2>
        <p>This is the second section that spans its own column.</p>
      </div>
    </div>
  );
};

export default PageLayout;
