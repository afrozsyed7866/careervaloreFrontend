export default function ScriptPlacement() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">Where to Place &lt;script&gt; Tags?</h3>
      <p className="mb-4 text-gray-600">
        The placement of script tags in HTML affects how and when JavaScript code is loaded and executed relative to HTML parsing and rendering.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">Traditional Approach</h4>
        <p>
          Scripts were traditionally placed at the end of the <code>&lt;body&gt;</code> tag to prevent blocking HTML parsing and rendering. This ensures the DOM is fully loaded before script execution.
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>
<body>
<h1>Welcome</h1>
<!-- Script at end of body -->
<script src="app.js"></script>
</body>
</html>`}
        </pre>

        <h4 className="font-medium">Modern Approach with Attributes</h4>
        <p>
          With modern JavaScript, scripts can be placed in the <code>&lt;head&gt;</code> using <code>async</code> or <code>defer</code> attributes for non-blocking loading:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>async:</strong> Downloads script asynchronously and executes it as soon as it’s available, potentially before DOM is fully loaded.
          </li>
          <li>
            <strong>defer:</strong> Downloads script asynchronously but waits until HTML parsing is complete before execution, maintaining script order.
          </li>
        </ul>
        <pre className="bg-black text-white p-2 rounded mt-2">         
        {`<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
<script src="app.js" defer></script>
<script src="analytics.js" async></script>
</head>
<body>
<h1>Welcome</h1>
</body>
</html>`}
        </pre>

        <h4 className="font-medium">Key Considerations</h4>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2">Placement</th>
              <th className="p-2">Pros</th>
              <th className="p-2">Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">End of Body</td>
              <td className="p-2">DOM ready, simple</td>
              <td className="p-2">Delayed loading</td>
            </tr>
            <tr>
              <td className="p-2">Head with defer</td>
              <td className="p-2">Order preserved, non-blocking</td>
              <td className="p-2">Slightly complex</td>
            </tr>
            <tr>
              <td className="p-2">Head with async</td>
              <td className="p-2">Fastest loading</td>
              <td className="p-2">Unpredictable order</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">
          <strong>Best Practices:</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>Use <code>defer</code> for external scripts that need DOM access or execution order</li>
          <li>Use <code>async</code> for independent scripts (e.g., analytics)</li>
          <li>Place critical scripts at body end if attributes aren’t an option</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700">
          Note: In React applications, script management is often handled through bundlers like Webpack or Vite, reducing the need for manual script tag placement.
        </p>
      </div>
    </div>
  );
}