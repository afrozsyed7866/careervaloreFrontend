import Head from "next/head";

export default function Blog() {
  const sections = [
    {
      title: "Part 1: HTML (20 Questions)",
      subsections: [
        {
          subtitle: "Semantic Tags",
          questions: [
            {
              q: "What are semantic HTML tags?",
              a: "Semantic HTML tags provide meaning to the content they wrap. Examples include <header>, <footer>, <article>, and <section>, making it easier for search engines and developers to understand the page structure.",
            },
            {
              q: "What is the <article> tag used for?",
              a: "The <article> tag is used for self-contained content that can stand alone, such as a blog post or news article.",
            },
            {
              q: "What is the difference between <section> and <div>?",
              a: "<section> is a semantic tag that groups related content, while <div> is a non-semantic tag used purely for layout purposes.",
            },
            {
              q: "Why should you use semantic tags in HTML?",
              a: "Semantic tags enhance accessibility, SEO, and make the code more understandable by defining the purpose of the content.",
            },
          ],
        },
        {
          subtitle: "Attributes",
          questions: [
            {
              q: "What is an attribute in HTML?",
              a: "An attribute is additional information provided inside the tag, modifying its behavior. For example, class or id.",
            },
            {
              q: "What is the purpose of the alt attribute in images?",
              a: "The alt attribute provides alternative text for an image, improving accessibility and SEO.",
            },
            {
              q: "How do you create a hyperlink in HTML?",
              a: 'Use the href attribute in an <a> tag, e.g., <a href="https://www.example.com">Link</a>.',
            },
            {
              q: "How do you use the target attribute in an anchor tag?",
              a: 'The target attribute specifies where to open the linked document. For example, target="_blank" opens it in a new tab.',
            },
          ],
        },
        {
          subtitle: "HTML Elements",
          questions: [
            {
              q: "What is the difference between block-level and inline elements?",
              a: "Block-level elements (e.g., <div>, <p>) take up the full width, while inline elements (e.g., <span>, <a>) only take up as much width as their content.",
            },
            {
              q: "What are void elements in HTML?",
              a: "Void elements are elements that do not have closing tags. Examples include <img>, <br>, and <input>.",
            },
            {
              q: "What is the purpose of the <meta> tag?",
              a: "The <meta> tag provides metadata about the HTML document, such as charset, author, and description, which helps in SEO and page rendering.",
            },
            {
              q: "How do you create an ordered list in HTML?",
              a: "Use the <ol> tag for ordered lists and <li> for each list item, e.g., <ol><li>Item 1</li><li>Item 2</li></ol>.",
            },
          ],
        },
        {
          subtitle: "Forms and Inputs",
          questions: [
            {
              q: "How do you create a form in HTML?",
              a: 'Use the <form> tag and include input elements like <input>, <textarea>, <select>, and <button>. For example, <form action="/submit" method="POST">.',
            },
            {
              q: "What is the purpose of the method attribute in forms?",
              a: "The method attribute specifies how the form data is sent to the server (GET or POST).",
            },
            {
              q: "How do you create a checkbox input in HTML?",
              a: 'Use the <input type="checkbox"> tag for checkboxes, e.g., <input type="checkbox" name="subscribe" value="yes">.',
            },
            {
              q: "How do you associate a label with a form element?",
              a: 'Use the for attribute in the <label> tag to associate it with an id of an input, e.g., <label for="name">Name</label><input id="name" type="text">.',
            },
          ],
        },
        {
          subtitle: "Media",
          questions: [
            {
              q: "How do you embed an image in HTML?",
              a: 'Use the <img> tag with src and alt attributes, e.g., <img src="image.jpg" alt="description">.',
            },
            {
              q: "How do you embed a video in HTML?",
              a: 'Use the <video> tag with the src and controls attributes, e.g., <video src="video.mp4" controls></video>.',
            },
            {
              q: "What is the purpose of the <audio> tag?",
              a: "The <audio> tag embeds sound content on a webpage, with controls like play, pause, and volume.",
            },
            {
              q: "How do you add a YouTube video to your HTML page?",
              a: 'You can embed a YouTube video using the <iframe> tag, e.g., <iframe src="https://www.youtube.com/embed/videoid"></iframe>.',
            },
          ],
        },
      ],
    },
    {
      title: "Part 2: CSS (15 Questions)",
      subsections: [
        {
          subtitle: "Selectors",
          questions: [
            {
              q: "What are CSS selectors?",
              a: "CSS selectors are used to select the HTML elements you want to style, such as element (p), class (.className), and ID (#id).",
            },
            {
              q: "What is the difference between a class selector and an ID selector?",
              a: "A class selector applies to multiple elements, while an ID selector applies to only one unique element.",
            },
            {
              q: "How do you select all <p> elements inside a <div>?",
              a: "Use the descendant selector: div p {} to select all <p> elements within a <div>.",
            },
          ],
        },
        {
          subtitle: "Box Model",
          questions: [
            {
              q: "What is the CSS box model?",
              a: "The box model describes the layout of elements, including the content, padding, border, and margin.",
            },
            {
              q: "How do padding and margin differ in the box model?",
              a: "Padding is the space between the content and the element's border, while margin is the space outside the border between the element and other elements.",
            },
            {
              q: "How do you set the width and height of an element including its padding and border?",
              a: "Use box-sizing: border-box; to include padding and border in the element's total width and height.",
            },
          ],
        },
        {
          subtitle: "Positioning and Layout",
          questions: [
            {
              q: "What is the position property in CSS?",
              a: "The position property defines how an element is positioned on the page. Values include static, relative, absolute, and fixed.",
            },
            {
              q: "What is the difference between absolute and relative positioning?",
              a: "Absolute positions an element relative to its nearest positioned ancestor, while relative positions an element relative to its normal position.",
            },
            {
              q: "What is Flexbox in CSS?",
              a: "Flexbox is a layout model that makes it easier to align and distribute space among items in a container using properties like display: flex, justify-content, and align-items.",
            },
          ],
        },
        {
          subtitle: "Responsive Design",
          questions: [
            {
              q: "What are media queries in CSS?",
              a: "Media queries allow you to apply CSS rules based on device characteristics like screen width, using @media rules, e.g., @media (maxWidth: 600px){}.",
            },
            {
              q: "What is the difference between min-width and max-width in media queries?",
              a: "min-width applies styles when the viewport width is greater than the specified value, while max-width applies styles when the width is less than the specified value.",
            },
            {
              q: "How do you create a responsive grid layout?",
              a: "Use CSS Grid or Flexbox along with media queries to adjust the layout for different screen sizes.",
            },
          ],
        },
        {
          subtitle: "Styling",
          questions: [
            {
              q: "How do you change the background color of an element?",
              a: "Use the background-color property, e.g., body { background-color: lightblue; }.",
            },
            {
              q: "What is the color property in CSS?",
              a: "The color property sets the color of the text, e.g., p { color: red; }.",
            },
            {
              q: "How do you change the font size of an element?",
              a: "Use the font-size property, e.g., h1 { font-size: 32px; }.",
            },
          ],
        },
      ],
    },
    {
      title: "Part 3: JavaScript (25 Questions)",
      subsections: [
        {
          subtitle: "DOM Manipulation",
          questions: [
            {
              q: "What is the DOM in JavaScript?",
              a: "The DOM (Document Object Model) is a representation of the HTML structure as objects, allowing JavaScript to interact with and manipulate the content and layout.",
            },
            {
              q: "How do you select an element by its ID in JavaScript?",
              a: "Use document.getElementById('id') to select an element by its ID.",
            },
            {
              q: "How do you add a class to an HTML element using JavaScript?",
              a: "Use element.classList.add('class-name') to add a class to an element.",
            },
            {
              q: "How do you remove an element from the DOM in JavaScript?",
              a: "Use element.remove() to remove an element from the DOM.",
            },
            {
              q: "How do you change the text content of an element in JavaScript?",
              a: "Use element.textContent = 'New text' to change the text of an element.",
            },
          ],
        },
        {
          subtitle: "Control Flow",
          questions: [
            {
              q: "What is a for loop in JavaScript?",
              a: "A for loop is used to execute a block of code a certain number of times. Example: for (let i = 0; i < 5; i++) { console.log(i); }.",
            },
            {
              q: "What is an if-else statement in JavaScript?",
              a: "An if-else statement executes a block of code if a condition is true, otherwise it runs the code in the else block.",
            },
            {
              q: "What is the purpose of the switch statement in JavaScript?",
              a: "A switch statement allows you to execute different blocks of code based on the value of a variable.",
            },
            {
              q: "What is a while loop in JavaScript?",
              a: "A while loop repeatedly executes a block of code as long as a specified condition is true.",
            },
            {
              q: "How do you exit a loop in JavaScript?",
              a: "Use the break statement to exit a loop prematurely.",
            },
          ],
        },
        {
          subtitle: "ES6 Features",
          questions: [
            {
              q: "What are arrow functions in JavaScript?",
              a: "Arrow functions are a shorthand syntax for writing functions in JavaScript. Example: const add = (a, b) => a + b;.",
            },
            {
              q: "What is destructuring in JavaScript?",
              a: "Destructuring allows you to extract values from arrays or objects into variables. Example: const [a, b] = [1, 2];.",
            },
            {
              q: "What is the difference between let and const in JavaScript?",
              a: "let allows you to reassign variables, while const creates read-only constants that cannot be reassigned.",
            },
            {
              q: "What is template literals in JavaScript?",
              a: "Template literals are string literals that allow embedded expressions, using backticks (``) and ${} for placeholders.",
            },
            {
              q: "What are default parameters in JavaScript?",
              a: "Default parameters allow you to initialize function parameters with default values if no value is passed.",
            },
            {
              q: "What is the spread operator in JavaScript?",
              a: "The spread operator (...) allows an iterable to expand in places where multiple arguments are expected.",
            },
            {
              q: "What is the rest parameter in JavaScript?",
              a: "The rest parameter (...args) allows you to pass an indefinite number of arguments to a function.",
            },
            {
              q: "What are promises in JavaScript?",
              a: "Promises represent asynchronous operations that either resolve or reject. Example: new Promise((resolve, reject) => {}).",
            },
          ],
        },
        {
          subtitle: "APIs",
          questions: [
            {
              q: "What is an API?",
              a: "An API (Application Programming Interface) allows applications to communicate with each other, providing data and services.",
            },
            {
              q: "What is the Fetch API in JavaScript?",
              a: "The Fetch API is used to make network requests to retrieve resources from a server. Example: fetch('https://api.example.com/data').then(response => response.json()).",
            },
            {
              q: "How do you handle errors in Fetch API requests?",
              a: "Use .catch() to handle errors in a Fetch request, e.g., fetch(url).catch(error => console.error('Error:', error)).",
            },
            {
              q: "What is JSON and how is it used with APIs?",
              a: "JSON (JavaScript Object Notation) is a lightweight format for data interchange, commonly used to send and receive data in API requests.",
            },
            {
              q: "What is the difference between GET and POST requests in APIs?",
              a: "GET requests retrieve data, while POST requests send data to the server.",
            },
            {
              q: "How do you send data in a POST request using Fetch API?",
              a: "Use the fetch() function with the method set to POST and include data in the body. Example: fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: 'value' }) });",
            },
            {
              q: "What is CORS and how does it relate to APIs?",
              a: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts how resources on a web page can be requested from another domain.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Backpack Questions - HTML, CSS, JS</title>
        <meta name="description" content="A blog covering HTML, CSS, and JavaScript questions." />
      </Head>

      <main className=" mx-auto px-8 py-6">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Backpack Questions: HTML, CSS, JavaScript
        </h1>

        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold text-blue-600 mt-6">
              {section.title}
            </h2>
            {section.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h3 className="text-xl font-medium text-gray-800 mt-4">
                  {subsection.subtitle}
                </h3>
                <div style={{border:"1px solid black"}}></div>
                <ul className="list-none">
                  {subsection.questions.map((qa, qaIndex) => (
                    <li key={qaIndex} className="bg-white p-3 rounded-lg shadow-sm mt-2">
                      <p className="font-semibold text-gray-900">{qa.q}</p>
                      <p className="text-gray-700">{qa.a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}