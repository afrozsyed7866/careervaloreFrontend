export default function DOMOverride() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">What if HTML Exists in Root?</h3>
      <p className="mb-4 text-gray-600">
        When React renders content into a DOM node (like the `root` div), it interacts with any pre-existing HTML in that node. Understanding this behavior is key to managing initial page loads and hydration.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">Default Behavior</h4>
        <p>
          Existing HTML in the root div is displayed until React’s <code>render()</code> method executes and replaces it with the React component tree. This can serve as a fallback or initial content before React takes over.
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`<!DOCTYPE html>
<html>
<head>
<title>My App</title>
</head>
<body>
<div id="root">
  <h1>Loading...</h1>
  <p>This is initial HTML content.</p>
</div>
<script src="app.js"></script>
</body>
</html>

// app.js
import React from "react";
import ReactDOM from "react-dom";

const App = React.createElement("div", {}, "React Content Loaded!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`}
        </pre>
        <p className="text-sm text-gray-700">
          In this example, "Loading..." and the paragraph appear briefly until React replaces them with "React Content Loaded!".
        </p>

        <h4 className="font-medium">Hydration with Server-Side Rendering</h4>
        <p>
          In server-side rendering (SSR) scenarios, pre-existing HTML isn’t replaced but "hydrated"—React attaches event listeners and makes it interactive without re-rendering the DOM from scratch.
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`// Server-rendered HTML
<div id="root">
<div>Server-rendered content</div>
</div>

// Client-side hydration
import React from "react";
import ReactDOM from "react-dom";

const App = React.createElement("div", {}, "Server-rendered content");
ReactDOM.hydrate(<App />, document.getElementById("root"));
`}
        </pre>

        <h4 className="font-medium">Key Implications</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Flash of Content:</strong> Pre-existing HTML can cause a brief "flash" before React loads, useful for progressive enhancement.
          </li>
          <li>
            <strong>SEO Benefits:</strong> Static HTML in root improves initial page visibility to search engines.
          </li>
          <li>
            <strong>Hydration:</strong> SSR relies on matching client and server content to avoid replacement.
          </li>
        </ul>

        <h4 className="font-medium">Best Practices</h4>
        <ul className="list-disc pl-6">
          <li>Use initial HTML as a loading state for better UX</li>
          <li>Ensure SSR HTML matches client-side components for hydration</li>
          <li>Minimize delays in React loading to reduce flash duration</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700">
          Note: Tools like Next.js handle much of this automatically, optimizing the interplay between static HTML and React rendering.
        </p>
      </div>
    </div>
  );
}