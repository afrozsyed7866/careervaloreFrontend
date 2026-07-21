export default function RealVsVirtualDOM() {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Real DOM vs Virtual DOM</h3>
        <p>
          The **Real DOM** is the actual structure of a webpage, managed directly by the browser. It represents the HTML elements and their attributes in a tree-like structure, allowing JavaScript to dynamically interact with and modify the webpage's content and layout. However, updating the Real DOM can be slow because every change requires the browser to recalculate the entire document layout, potentially causing reflows and repaints[1][2].
        </p>
        <p>
          In contrast, the **Virtual DOM** is a lightweight, in-memory representation of the Real DOM. It acts as a buffer, allowing React to manage changes more efficiently. When updates occur, React first modifies the Virtual DOM, then compares it with the previous version to identify the differences. This process, known as reconciliation, ensures that only the necessary changes are applied to the Real DOM, minimizing unnecessary updates and improving performance[1][3][4].
        </p>
        <p>
          The key differences between the Real DOM and Virtual DOM are summarized below:
        </p>
        <table className="table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Aspect</th>
              <th className="px-4 py-2 border border-gray-300">Real DOM</th>
              <th className="px-4 py-2 border border-gray-300">Virtual DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Nature</td>
              <td className="px-4 py-2 border border-gray-300">Actual webpage structure</td>
              <td className="px-4 py-2 border border-gray-300">Lightweight, in-memory copy</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Updates</td>
              <td className="px-4 py-2 border border-gray-300">Entire DOM updated on changes</td>
              <td className="px-4 py-2 border border-gray-300">Only necessary parts updated via reconciliation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Performance</td>
              <td className="px-4 py-2 border border-gray-300">Slower due to full updates</td>
              <td className="px-4 py-2 border border-gray-300">Faster due to minimal updates</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Interaction</td>
              <td className="px-4 py-2 border border-gray-300">Direct interaction with browser</td>
              <td className="px-4 py-2 border border-gray-300">No direct interaction with browser</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          In summary, while the Real DOM is the actual structure of a webpage, the Virtual DOM is a lightweight abstraction that enhances performance by minimizing unnecessary updates. This approach is particularly beneficial in frameworks like React, where it enables efficient and reactive user interfaces[5][6].
        </p>
      </div>
    );
  }
  