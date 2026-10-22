export default function FirstReactProgram() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">First React Program</h3>
      <p className="mb-4 text-gray-600">
        This is an example of a basic React program demonstrating how to create and render elements to the DOM.
      </p>
      
        <pre className="bg-black text-white p-2 rounded mt-2">         
        {`import React from "react";
import ReactDOM from "react-dom";

const Heading = React.createElement(
"h1", 
{ 
  id: "heading",
  className: "title",
  style: { color: "blue" }
}, 
"Hello world from React app!"
);

const Paragraph = React.createElement(
"p",
{ id: "description" },
"This is a simple demonstration of React's core functionality."
);

const Container = React.createElement(
"div",
{ className: "container" },
[Heading, Paragraph]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);`}
      </pre>

      <div className="space-y-4">
        <p>
          React elements are JavaScript objects with props, rendered into the DOM using `render()`. In this example, we:
        </p>
        
        <ul className="list-disc pl-6">
          <li>Import React and ReactDOM libraries</li>
          <li>Create multiple elements using React.createElement()</li>
          <li>Use props like id, className, and style to customize elements</li>
          <li>Nest elements within a container div</li>
          <li>Render everything to the DOM via a root element</li>
        </ul>

        <p className="mt-4">
          Key concepts demonstrated:
        </p>
        
        <ol className="list-decimal pl-6">
          <li>
            <strong>React.createElement:</strong> Takes three arguments - element type, props object, and children
          </li>
          <li>
            <strong>ReactDOM.createRoot:</strong> Creates a root node for rendering React elements
          </li>
          <li>
            <strong>Hierarchy:</strong> Shows how elements can be nested within each other
          </li>
        </ol>

        <p className="mt-4 text-sm text-gray-700">
          Note: While this example uses React.createElement directly, modern React applications typically use JSX syntax, which is more readable and gets transpiled to these createElement calls behind the scenes.
        </p>
      </div>
    </div>
  );
}