export default function ReactVsReactDOM() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">React vs React-DOM</h3>
      <p className="mb-4 text-gray-600">
        React and React-DOM are distinct yet complementary libraries in the React ecosystem. Understanding their roles clarifies how React applications are built and rendered.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">Core Roles</h4>
        <p>
          <strong>React</strong> is the core library that provides the tools and logic for defining and managing UI components, state, and props. <strong>React-DOM</strong>, on the other hand, is a separate package responsible for rendering those components into the browser’s Document Object Model (DOM) and handling DOM-specific interactions.
        </p>

        <h4 className="font-medium">Detailed Breakdown</h4>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2">Aspect</th>
              <th className="p-2">React</th>
              <th className="p-2">React-DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Purpose</td>
              <td className="p-2">Builds UI components</td>
              <td className="p-2">Renders to browser DOM</td>
            </tr>
            <tr>
              <td className="p-2">Key Features</td>
              <td className="p-2">Virtual DOM, hooks, state</td>
              <td className="p-2">DOM rendering, events</td>
            </tr>
            <tr>
              <td className="p-2">Environment</td>
              <td className="p-2">Platform-agnostic</td>
              <td className="p-2">Browser-specific</td>
            </tr>
            <tr>
              <td className="p-2">Main Methods</td>
              <td className="p-2">createElement, useState</td>
              <td className="p-2">render, hydrate</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-medium">Code Example</h4>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`// React: Defining the UI logic
import React, { useState } from "react";
// React-DOM: Rendering to the DOM
import ReactDOM from "react-dom";

function App() {
const [count, setCount] = useState(0); // React's core feature

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
}

// React-DOM renders the App component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
`}
        </pre>
        <p className="text-sm text-gray-700">
          Here, React handles the component logic and state, while React-DOM bridges it to the browser DOM.
        </p>

        <h4 className="font-medium">Why Separate?</h4>
        <p>
          React was split into separate packages starting with version 0.14 (2015) to make it platform-agnostic. This modularity allows:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>React:</strong> To focus on UI logic and be reusable across environments (e.g., React Native for mobile).
          </li>
          <li>
            <strong>React-DOM:</strong> To handle browser-specific rendering and events, keeping React core lightweight.
          </li>
        </ul>
        <p>
          Other renderers like <code>react-native</code> or <code>react-three-fiber</code> (for 3D) can use the same React core with different output targets.
        </p>

        <h4 className="font-medium">Practical Implications</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Imports:</strong> You need both <code>react</code> and <code>react-dom</code> in browser-based projects.
          </li>
          <li>
            <strong>Hydration:</strong> React-DOM provides <code>hydrate</code> for server-side rendering, attaching events to pre-rendered HTML.
          </li>
          <li>
            <strong>Flexibility:</strong> The separation enables React to adapt to non-DOM environments without altering its core.
          </li>
        </ul>

        <h4 className="font-medium">Historical Context</h4>
        <p>
          Before the split, React included DOM rendering. As its popularity grew, Facebook separated React-DOM to support diverse platforms, reflecting React’s evolution from a browser-centric library to a universal UI framework.
        </p>

        <p className="mt-4 text-sm text-gray-700">
          Note: In modern setups (e.g., with Next.js or Create React App), the distinction is often abstracted away, but understanding it helps when debugging or working across platforms.
        </p>
      </div>
    </div>
  );
}