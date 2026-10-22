export default function RealVsVirtualDOM() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">Real DOM vs Virtual DOM</h3>
      <p className="mb-4 text-gray-600">
        The distinction between the Real DOM and Virtual DOM is central to React’s performance optimization, fundamentally changing how UI updates are handled in modern web development.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">Definitions</h4>
        <p>
          <strong>Real DOM:</strong> The actual structure of a webpage as represented by the browser’s Document Object Model (DOM)—a tree of objects that defines the HTML elements, their attributes, and their hierarchy. Updates to the Real DOM are computationally expensive because they trigger reflows and repaints.
        </p>
        <p>
          <strong>Virtual DOM:</strong> A lightweight, in-memory copy of the Real DOM maintained by libraries like React. It acts as an intermediary, allowing efficient updates by calculating changes before applying them to the Real DOM through a process called reconciliation.
        </p>

        <h4 className="font-medium">How They Work</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Real DOM:</strong> Any change (e.g., updating text or adding an element) directly modifies the browser’s DOM, often causing the entire tree to re-render, even for small updates.
          </li>
          <li>
            <strong>Virtual DOM:</strong> When state changes, React creates a new Virtual DOM tree, compares it with the previous one (diffing), and applies only the necessary updates to the Real DOM.
          </li>
        </ul>

        <h4 className="font-medium">Comparison Table</h4>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2">Aspect</th>
              <th className="p-2">Real DOM</th>
              <th className="p-2">Virtual DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Representation</td>
              <td className="p-2">Actual browser structure</td>
              <td className="p-2">Lightweight JS object</td>
            </tr>
            <tr>
              <td className="p-2">Update Speed</td>
              <td className="p-2">Slow (full re-render)</td>
              <td className="p-2">Fast (targeted updates)</td>
            </tr>
            <tr>
              <td className="p-2">Manipulation</td>
              <td className="p-2">Direct, expensive</td>
              <td className="p-2">Indirect, efficient</td>
            </tr>
            <tr>
              <td className="p-2">Memory Usage</td>
              <td className="p-2">Higher (browser-managed)</td>
              <td className="p-2">Lower (in-memory copy)</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-medium">Reconciliation Example</h4>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`import React, { useState } from "react";
import ReactDOM from "react-dom";

function List() {
const [items, setItems] = useState(["Apple", "Banana"]);

return (
  <div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <button onClick={() => setItems([...items, "Orange"])}>
      Add Item
    </button>
  </div>
);
}

ReactDOM.render(<List />, document.getElementById("root"));`}
        </pre>
        <p className="text-sm text-gray-700">
          When "Orange" is added, the Virtual DOM identifies the change, updates only the new <code></code>, and syncs it with the Real DOM—avoiding a full re-render.
        </p>

        <h4 className="font-medium">Real DOM Example (Traditional)</h4>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`// Without Virtual DOM
const ul = document.querySelector("ul");
function addItem() {
ul.innerHTML += "<li>Orange</li>"; // Re-renders entire list
}`}
        </pre>
        <p className="text-sm text-gray-700">
          This approach updates the entire <code></code>, even if only one item changes, making it less efficient.
        </p>

        <h4 className="font-medium">Advantages of Virtual DOM</h4>
        <ul className="list-disc pl-6">
          <li><strong>Performance:</strong> Minimizes direct DOM operations.</li>
          <li><strong>Simplicity:</strong> Developers focus on state, not DOM manipulation.</li>
          <li><strong>Consistency:</strong> Ensures UI matches state predictably.</li>
        </ul>

        <h4 className="font-medium">Limitations</h4>
        <ul className="list-disc pl-6">
          <li>Overhead of maintaining a Virtual DOM (minor in most cases).</li>
          <li>Not always faster for very small, simple updates.</li>
        </ul>

        <h4 className="font-medium">Historical Context</h4>
        <p>
          Introduced by React in 2013, the Virtual DOM addressed the inefficiencies of direct DOM manipulation common in tools like jQuery. It’s now adopted or adapted by other frameworks (e.g., Vue’s virtual DOM).
        </p>

        <p className="mt-4 text-sm text-gray-700">
          Note: While the Virtual DOM is a hallmark of React, modern alternatives like Svelte skip it entirely, compiling to vanilla JS for direct updates—showing there’s no one-size-fits-all solution.
        </p>
      </div>
    </div>
  );
}