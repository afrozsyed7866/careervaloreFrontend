export default function Emmet() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">What is Emmet?</h3>
      <p className="mb-4 text-gray-600">
        Emmet is a powerful toolkit and text editor plugin that allows developers to write HTML, CSS, and other code faster by expanding simple abbreviations into full code snippets.
      </p>

      <div className="space-y-4">
        <h4 className="font-medium">How It Works</h4>
        <p>
          Emmet uses a concise syntax inspired by CSS selectors. You type an abbreviation and trigger expansion (often with Tab or Enter), and Emmet generates the corresponding code structure.
        </p>

        <h4 className="font-medium">Basic Examples</h4>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2">Abbreviation</th>
              <th className="p-2">Expanded Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2"><code>li*3</code></td>
              <td className="p-2">
                <pre className="bg-gray-100 p-1 rounded">
                  {`<ul>
<li></li>
<li></li>
<li></li>
</ul>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td className="p-2"><code>div.container p</code></td>
              <td className="p-2">
                <pre className="bg-gray-100 p-1 rounded">
                  {`<div class="container">
<p></p>
</div>`}
                </pre>
              </td>
            </tr>
            <tr>
              <td className="p-2"><code>h1#title</code></td>
              <td className="p-2">
                <pre className="bg-gray-100 p-1 rounded">
                  {`<h1 id="title"></h1>`}
                </pre>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="font-medium">Advanced Features</h4>
        <ul className="list-disc pl-6">
          <li>
            <strong>Multiplication:</strong> <code>*n</code> repeats elements (e.g., <code>li*5</code> creates 5 list items).
          </li>
          <li>
            <strong>Grouping:</strong> Parentheses <code>()</code> group elements (e.g., <code>(header+main)</code>).
          </li>
          <li>
            <strong>Attributes:</strong> Square brackets <code>[]</code> add attributes (e.g., <code>input[type="text"]</code>).
          </li>
          <li>
            {/* <strong>Text:</strong> Curly braces <code>{}</code> insert content (e.g., <code>{Hello}</code> becomes <code><p>Hello</p></code>). */}
          </li>
          <li>
            <strong>CSS Support:</strong> Expands CSS properties (e.g., <code>m10</code> becomes <code>margin: 10px;</code>).
          </li>
        </ul>

        <h4 className="font-medium">Practical Example</h4>
        <p>Typing this abbreviation:</p>
        <pre className="bg-gray-100 p-2 rounded">
          {`div#wrapper>header+main>article.post*2>h2{Post $}+p`}
        </pre>
        <p>Expands to:</p>
        <pre className="bg-black text-white p-2 rounded mt-2">         
          {`<div id="wrapper">
<header></header>
<main>
  <article class="post">
    <h2>Post 1</h2>
    <p></p>
  </article>
  <article class="post">
    <h2>Post 2</h2>
    <p></p>
  </article>
</main>
</div>`}
        </pre>

        <h4 className="font-medium">Benefits</h4>
        <ul className="list-disc pl-6">
          <li>Speeds up coding workflow significantly</li>
          <li>Reduces repetitive typing</li>
          <li>Supported in editors like VS Code, Sublime Text, and JetBrains IDEs</li>
          <li>Customizable with user-defined snippets</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700">
          Note: Emmet is built into many modern editors (e.g., VS Code) by default, but you can install it as a plugin for others. It’s especially useful for React developers writing JSX.
        </p>
      </div>
    </div>
  );
}