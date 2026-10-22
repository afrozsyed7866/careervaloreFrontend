export default function AsyncVsDefer() {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Async vs Defer</h3>
        <p className="mt-2">
          When loading external JavaScript files via  tags, the `async` and `defer` attributes control how and when those scripts are executed relative to HTML parsing—a critical consideration in web development, including React apps. As seen in the "Namaste React Notes" Episode 01, where React is initially introduced via CDN scripts like:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<script src="https://unpkg.com/react@18/umd/react.development.js"></script>`}
        </pre>
        <p className="mt-2">
          understanding these attributes ensures optimal performance and correct script behavior. While modern React setups lean on bundlers like Parcel or Webpack, `async` and `defer` remain relevant for CDN-based or hybrid approaches, offering distinct strategies to balance speed, order, and DOM readiness.
        </p>
        <p className="mt-2">
          By default, a  tag without attributes blocks HTML parsing: the browser downloads and executes the script immediately, pausing the parsing of the HTML document until the script is fully processed. This can delay rendering, especially for large scripts like `react.development.js`. Both `async` and `defer` address this by allowing HTML parsing to continue, but they differ in execution timing and order, impacting how dependencies (e.g., React before ReactDOM) are handled. Let’s explore each in detail.
        </p>
        <p className="mt-2">
          The `async` attribute tells the browser to download the script asynchronously while continuing to parse the HTML. Once the script is downloaded, it executes immediately—potentially interrupting HTML parsing—and does so as soon as it’s ready, regardless of other scripts’ order. This makes `async` ideal for standalone scripts that don’t depend on others or the DOM being fully loaded. For example:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<script async src="https://example.com/analytics.js"></script>`}
        </pre>
        <p className="mt-2">
          Here, `analytics.js` (e.g., a tracking script) loads and runs whenever it’s ready, without needing DOM elements or other scripts. However, in the notes’ context, using `async` for React scripts can be risky:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<script async src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script async src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script async src="index.js"></script>`}
        </pre>
        <p className="mt-2">
          Since `async` doesn’t guarantee order, `index.js` (which uses `React` and `ReactDOM`) might execute before `react-dom.development.js` is ready, causing errors like `"ReactDOM is not defined"`. This out-of-order execution is `async`’s key limitation—great for speed but unreliable for interdependent scripts.
        </p>
        <p className="mt-2">
          The `defer` attribute, in contrast, also downloads the script asynchronously but delays execution until the HTML document is fully parsed (i.e., after the `` tag is reached). Crucially, `defer` preserves the order of scripts as written in the HTML, making it perfect for scenarios where dependencies matter. For the React setup in the notes, `defer` ensures `react.development.js` loads before `react-dom.development.js`, and both complete before `index.js` runs:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<script defer src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script defer src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script defer src="index.js"></script>`}
        </pre>
        <p className="mt-2">
          Here, the browser downloads all three scripts in parallel while parsing HTML, then executes them in sequence after the DOM is ready. This guarantees that `React` and `ReactDOM` are available when `index.js` renders components, avoiding runtime errors. It’s why `defer` is often recommended for external scripts in the notes’ CDN approach—balancing performance with reliability.
        </p>
        <p className="mt-2">
          Let’s visualize the difference with a typical HTML file from Episode 01:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<!DOCTYPE html>
  <html>
  <head>
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- Without async or defer: Blocks parsing -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="index.js"></script>
  </body>
  </html>`}
        </pre>
        <p className="mt-2">
          Without attributes, the browser pauses at each `` to download and execute, delaying the rendering of `#root`. With `async`, scripts might run out of order, breaking dependencies. With `defer`, parsing finishes first, then scripts execute in order—ideal for React’s setup where `index.js` relies on the DOM (`#root`) and prior scripts.
        </p>
        <p className="mt-2">
          Performance-wise, `async` can be faster for isolated scripts since it executes as soon as the file arrives, potentially before the DOM is complete. However, this speed comes at the cost of unpredictability—unsuitable when DOM elements or other scripts are prerequisites. `defer` is slower to execute (waiting for HTML parsing) but ensures correctness, making it the safer choice for most applications, especially React’s CDN-based prototypes in the notes. Modern bundlers (Episode 02) mitigate these concerns by combining scripts into one file, but `async` and `defer` remain relevant for external resources like analytics or fonts.
        </p>
        <p className="mt-2">
          When to use each? Use `async` for independent scripts (e.g., analytics, ads) where order and DOM readiness don’t matter:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<script async src="https://example.com/tracker.js"></script>`}
        </pre>
        <p className="mt-2">
          Use `defer` for scripts that depend on the DOM or each other, like React’s ecosystem:
        </p>
        <pre className="bg-black text-white p-2 rounded mt-2">
          {`<script defer src="https://unpkg.com/react@18/umd/react.development.js"></script>`}
        </pre>
        <p className="mt-2">
          Combining them is rare but possible—`async` takes precedence if both are present, though it’s generally avoided to prevent confusion. Browser support is excellent for both (since IE10+), so they’re reliable choices.
        </p>
        <p className="mt-2">
          In the React context, `defer` aligns with Episode 01’s CDN setup, ensuring scripts load correctly without manual hacks (e.g., placing scripts at the body’s end). As the notes progress to bundlers in Episode 02,  management shifts to tools like Webpack, but understanding `async` vs. `defer` remains foundational for optimizing any external script loading—whether in prototypes, legacy code, or hybrid apps.
        </p>
        <p className="mt-2">
          In summary, `async` and `defer` enhance script loading by avoiding blocking behavior. `async` prioritizes speed, executing scripts as they download, potentially out of order—great for standalone tasks but risky for dependencies. `defer` waits for HTML parsing, executing in order—ideal for React’s interdependent scripts. The "Namaste React Notes" implicitly rely on this knowledge for CDN setups, laying the groundwork for efficient, error-free development before diving into modern tooling.
        </p>
      </div>
    );
  }