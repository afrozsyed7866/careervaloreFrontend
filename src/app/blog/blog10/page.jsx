export default function WhyReactNamed() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">Why is React Named "React"?</h3>
      <p className="mb-4 text-gray-600">
        The name "React" reflects its core philosophy: it efficiently <em>reacts</em> to changes in application state, ensuring the user interface stays in sync with data through a unique approach to rendering.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">The Concept Behind the Name</h4>
        <p>
          React was designed to address the challenge of updating the DOM efficiently. Traditional web apps often reloaded entire pages or manually manipulated the DOM, which was slow and error-prone. React "reacts" to state or prop changes by leveraging a Virtual DOM—a lightweight, in-memory representation of the real DOM—allowing it to update only the parts of the UI that need to change.
        </p>

        <h4 className="font-medium">How It Works</h4>
        <p>
          When state changes, React:
        </p>
        <ol className="list-decimal pl-6">
          <li>Creates a new Virtual DOM tree.</li>
          <li>Compares it with the previous tree (diffing).</li>
          <li>Calculates the minimal set of updates needed.</li>
          <li>Applies those updates to the real DOM.</li>
        </ol>
        <p>
          This reactive process avoids full page reloads and unnecessary DOM operations, making UI updates fast and seamless.
        </p>

        <h4 className="font-medium">Simple Example</h4>
        <pre className="bg-black text-white p-2 rounded mt-2">         
        {`import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
const [count, setCount] = useState(0);

return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
  </div>
);
}

ReactDOM.render(<Counter />, document.getElementById("root"));`}
        </pre>
        <p className="text-sm text-gray-700">
          Here, React "reacts" to the <code>count</code> state change, updating only the <code></code> element’s text without touching the button.
        </p>

        <h4 className="font-medium">Historical Context</h4>
        <p>
          Created by Jordan Walke at Facebook in 2011 and open-sourced in 2013, React drew inspiration from reactive programming paradigms. The name emphasizes its ability to respond dynamically to data changes, a departure from older, imperative approaches like jQuery’s manual DOM manipulation.
        </p>

        <h4 className="font-medium">Why "React" Fits</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Efficiency:</strong> The Virtual DOM minimizes costly real DOM updates.
          </li>
          <li>
            <strong>Responsiveness:</strong> UI changes mirror state changes instantly.
          </li>
          <li>
            <strong>Declarative Nature:</strong> You define <em>what</em> the UI should look like, and React handles <em>how</em> to update it.
          </li>
        </ul>

        <h4 className="font-medium">Contrast with Alternatives</h4>
        <p>
          Unlike frameworks like Angular (which uses two-way binding) or Vue (which has its own reactivity system), React’s unidirectional data flow and Virtual DOM give it a distinct "reactive" flavor, aligning perfectly with its name.
        </p>

        <p className="mt-4 text-sm text-gray-700">
          Note: The name "React" also nods to its philosophical shift—focusing on reactive UI updates rather than imperative DOM management—making it a cornerstone of modern web development.
        </p>
      </div>
    </div>
  );
}