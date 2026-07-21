export default function FrameworkVsLibrary() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">Framework vs Library</h3>
      <p className="mb-4 text-gray-600">
        Understanding the distinction between a framework and a library is crucial for developers, as it affects how you design, control, and structure your code.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">Core Difference</h4>
        <p>
          A <strong>library</strong> provides specific, reusable functions or tools that you call and control as needed. In contrast, a <strong>framework</strong> imposes a predefined structure and flow for your application, inverting control so that it dictates how and when your code is executed.
        </p>

        <h4 className="font-medium">Detailed Comparison</h4>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2">Aspect</th>
              <th className="p-2">Library</th>
              <th className="p-2">Framework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Control</td>
              <td className="p-2">You control the flow</td>
              <td className="p-2">Framework controls the flow</td>
            </tr>
            <tr>
              <td className="p-2">Usage</td>
              <td className="p-2">Call functions as needed</td>
              <td className="p-2">Follow its structure/rules</td>
            </tr>
            <tr>
              <td className="p-2">Flexibility</td>
              <td className="p-2">High, use what you want</td>
              <td className="p-2">Limited by framework design</td>
            </tr>
            <tr>
              <td className="p-2">Learning Curve</td>
              <td className="p-2">Usually simpler</td>
              <td className="p-2">Often steeper</td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-medium">Examples</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Library:</strong> jQuery - You call its functions (e.g., <code>$.ajax()</code>) wherever you need them in your code.
            <pre className="bg-black text-white p-2 rounded mt-2">         
            {`// Using jQuery (Library)
$(document).ready(() => {
$("#button").click(() => alert("Clicked!"));
});`}
            </pre>
          </li>
          <li>
            <strong>Framework:</strong> React - It dictates component lifecycle and rendering flow.
            <pre className="bg-black text-white p-2 rounded mt-2">         
            {`// Using React (Framework)
function App() {
return <button onClick={() => alert("Clicked!")}>Click Me</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));`}
            </pre>
          </li>
        </ul>

        <h4 className="font-medium">Inversion of Control (IoC)</h4>
        <p>
          The key concept is <em>Inversion of Control</em>. With a library, you’re the driver, deciding when and how to use its tools. With a framework, it’s the driver, and you provide the "passenger" code (e.g., components, routes) to fit its structure. This is often summarized as "Don’t call us, we’ll call you" for frameworks.
        </p>

        <h4 className="font-medium">Real-World Implications</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Libraries:</strong> Ideal for small projects or when you need specific functionality (e.g., Lodash for utilities, Moment.js for dates).
          </li>
          <li>
            <strong>Frameworks:</strong> Suited for larger applications requiring structure (e.g., Angular for enterprise apps, Django for backend).
          </li>
          <li>
            <strong>Hybrid Cases:</strong> React is often debated—it’s a library for UI but feels framework-like with its ecosystem (e.g., React Router, Redux).
          </li>
        </ul>

        <h4 className="font-medium">Pros and Cons</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Library Pros:</strong></p>
            <ul className="list-disc pl-6 text-sm">
              <li>Lightweight and flexible</li>
              <li>Easy to integrate</li>
            </ul>
            <p><strong>Cons:</strong></p>
            <ul className="list-disc pl-6 text-sm">
              <li>No built-in structure</li>
              <li>More manual setup</li>
            </ul>
          </div>
          <div>
            <p><strong>Framework Pros:</strong></p>
            <ul className="list-disc pl-6 text-sm">
              <li>Consistent structure</li>
              <li>Built-in features</li>
            </ul>
            <p><strong>Cons:</strong></p>
            <ul className="list-disc pl-6 text-sm">
              <li>Less flexibility</li>
              <li>Overhead for small projects</li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700">
          Note: Choosing between a library and framework depends on project size, team expertise, and desired control level. Many modern apps use both in tandem.
        </p>
      </div>
    </div>
  );
}