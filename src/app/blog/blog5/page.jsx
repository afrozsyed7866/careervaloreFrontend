export default function NestedElements() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">Nested Elements with Siblings</h3>
      <p className="mb-4 text-gray-600">
        This example demonstrates how to create a hierarchy of nested React elements, including sibling elements at the same level.
      </p>

      <pre className="bg-black text-white p-2 rounded mt-2">         
      {`import React from "react";
import ReactDOM from "react-dom";

// Creating nested elements with multiple children
const Parent = React.createElement("div", { 
  id: "parent",
  className: "container",
  style: { padding: "20px", backgroundColor: "#f0f0f0" }
}, 
React.createElement("div", { 
  id: "child",
  style: { border: "1px solid #ccc" }
}, [
  React.createElement("h1", { 
    className: "title",
    style: { color: "blue" }
  }, "First Heading"),
  React.createElement("h1", { 
    className: "title",
    style: { color: "green" }
  }, "Second Heading"),
  React.createElement("p", { 
    className: "description"
  }, "This is a paragraph sibling")
])
);

// Alternative with more complex nesting
const ComplexParent = React.createElement("section", { 
  className: "complex-container"
}, [
  React.createElement("header", {}, "Header Content"),
  Parent,
  React.createElement("footer", {}, "Footer Content")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComplexParent />);`}
      </pre>

      <div className="space-y-4">
        <p>
          This code showcases how React handles element nesting and sibling relationships:
        </p>

        <ul className="list-disc pl-6">
          <li>A parent div containing a child div</li>
          <li>Multiple sibling elements (h1 tags and a p tag) within the child div</li>
          <li>Styling through props at different levels</li>
          <li>A more complex hierarchy with section, header, and footer</li>
        </ul>

        <p className="mt-4">
          Key features demonstrated:
        </p>

        <ol className="list-decimal pl-6">
          <li>
            <strong>Array of Children:</strong> Using an array to group multiple sibling elements
          </li>
          <li>
            <strong>Props Usage:</strong> Adding ids, classes, and inline styles to elements
          </li>
          <li>
            <strong>Nesting Levels:</strong> Multiple levels of element hierarchy
          </li>
          <li>
            <strong>Composition:</strong> Combining multiple elements into a single render
          </li>
        </ol>

        <div className="mt-4">
          <h4 className="font-medium">Practical Applications:</h4>
          <p className="text-sm text-gray-700">
            This structure is useful for:
            - Creating layouts with multiple sections
            - Building component trees
            - Organizing related content
            - Applying consistent styling across related elements
          </p>
        </div>

        <p className="mt-4 text-sm text-gray-700">
          Note: In real-world applications, you would typically use JSX syntax or functional components instead of React.createElement for better readability and maintainability.
        </p>
      </div>
    </div>
  );
}