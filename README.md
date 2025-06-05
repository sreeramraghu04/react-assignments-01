# React

## assignment 01

1. Whats React and its pros and cons ?

- React is a JavaScript library developed and maintained by Meta for building user interfaces, particularly single-page applications. It allows devolpers to create large web applications that can update and render efficiently in response to data changes.

  - Pros of React:

    - Component Reusability: Developers can reuse components across the application, which improves maintainability and reduces development time.

    - Virtual DOM: Enhances performance by minimizing direct interaction with the real DOM.

    - Strong Community Support: Backed by Meta and a vast community, ensuring regular updates, documentation, and third-party libraries.

    - SEO-Friendly: With server-side rendering options like Next.js, React can be optimized for SEO.

    - Unidirectional Data Flow: Ensures better data management and debugging through a one-way data binding approach.

  - Cons of React:

    - Learning Curve: While React itself is simple, integrating with its ecosystem (like Redux, React Router, etc.) can be complex for beginners.

    - Fast-Paced Development: Frequent updates can sometimes cause compatibility issues with third-party libraries.

    - Boilerplate Code: Managing state and props in large applications may lead to a lot of boilerplate code without tools like Redux Toolkit or Zustand.

    - JSX Syntax: JSX can be confusing initially for developers unfamiliar with HTML inside JavaScript.

2. What do you understand by Virtual Dom ?

- The Virtual DOM (Document Object Model) is a programming concept used in libraries like React to improve the performance and efficiency of web applications. It is a lightweight, in-memory representation of the actual DOM on the browser.

- Whenever the state of a React component changes, a new Virtual DOM is created. React then compares this new Virtual DOM with the previous one using a process called "diffing." After identifying the differences, React updates only the parts of the real DOM that have changed, rather than re-rendering the entire page. This minimizes direct manipulation of the actual DOM, which is known to be slow and inefficient.

- By using the Virtual DOM, applications become faster, more responsive, and easier to manage, especially in large-scale projects where frequent UI updates are required.

3. Difference between Virtual Dom vs Real Dom ?

- The main difference between the Virtual DOM and the Real DOM lies in how updates to the user interface are handled.

- The Real DOM (Document Object Model) is the actual representation of the UI in the browser. When we manipulate the Real DOM directly, every change causes the browser to re-render part or all of the page. This process can be relatively slow and inefficient, especially for complex applications with frequent updates.

- On the other hand, the Virtual DOM is an in-memory, lightweight copy of the Real DOM used by libraries like React. When the state of a component changes, a new Virtual DOM is created and compared with the previous one using a process called “diffing.” React then identifies only the elements that changed and updates the Real DOM in a very efficient way through a process called “reconciliation.”

  - To summarize:

  - Real DOM updates are slower and can cause performance issues.

  - Virtual DOM allows faster and more efficient updates by minimizing direct manipulation of the Real DOM.

4. Whats component? Types of component

- A component is a reusable, independent, and self-contained piece of code that defines part of the user interface in a web application. In the context of modern JavaScript frameworks like React (which I’m learning through my MERN stack course), a component can manage its own logic, structure, and styling, making it easier to build and maintain complex UIs.

- Components can be thought of like building blocks—each responsible for rendering a small, reusable part of the interface.

  - There are mainly two types of components:

  - Functional Components:

    - These are JavaScript functions that return JSX (JavaScript XML).
    - They are simple, lightweight, and ideal for components that primarily render UI.
    - With the introduction of React Hooks, functional components can now manage state and side effects, making them just as powerful as class components.
    - Example:

      ```jsx
      function Greeting() {
        return <h1>Hello, Sreeram!</h1>;
      }
      ```

  - Class Components:

    - These are ES6 classes that extend React.Component.
    - They have access to lifecycle methods and can hold state using `this.state`.
    - They were more common before hooks were introduced.
    - Example:

      ```jsx
      class Greeting extends React.Component {
        render() {
          return <h1>Hello, Sreeram!</h1>;
        }
      }
      ```

5. Difference between class & function based component ?

- In React, components can be created in two primary ways: using class-based components or function-based components.

  - Class-Based Components:

    - These are the older way of creating components in React.
    - They are ES6 classes that extend from React.Component.
    - Class components can have lifecycle methods such as componentDidMount, shouldComponentUpdate, etc.
    - They use a constructor to initialize state and use this.setState to update it.
    - Example:

      ```jsx
      class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = { count: 0 };
        }

        render() {
          return <div>{this.state.count}</div>;
        }
      }
      ```

  - Function-Based Components:

    - These are simpler JavaScript functions that return JSX.
    - Initially, they were called "stateless components", but with the introduction of Hooks in React 16.8, they can now handle state and side effects.
    - Hooks like useState and useEffect allow function components to manage state and lifecycle logic.
    - They result in cleaner and more readable code.
    - Example:

      ```jsx
      import { useState } from "react";

      function MyComponent() {
        const [count, setCount] = useState(0);
        return <div>{count}</div>;
      }
      ```

6. Explain react component life cycle ?

- In React, the component lifecycle refers to the series of phases a component goes through from its creation to its removal from the DOM. These phases are mainly divided into three categories:

  - **Mounting** – when the component is being created and inserted into the DOM.
  - **Updating** – when the component is re-rendered due to changes in props or state.
  - **Unmounting** – when the component is removed from the DOM.

  In class-based components, React provides specific lifecycle methods that allow us to run code at each of these stages:

  🔹 **Mounting Phase:**

  - `constructor()` – Initializes state and binds methods.
  - `static getDerivedStateFromProps()` – Invoked right before rendering, both on initial mount and updates.
  - `render()` – Returns the JSX to render.
  - `componentDidMount()` – Runs after the component has mounted. Ideal for API calls or subscriptions.

  🔹 **Updating Phase:**

  - `static getDerivedStateFromProps()` – Also called here.
  - `shouldComponentUpdate()` – Allows you to optimize performance by preventing unnecessary renders.
  - `render()` – Called again to re-render the component.
  - `getSnapshotBeforeUpdate()` – Captures information before the DOM is updated.
  - `componentDidUpdate()` – Called after the DOM updates. Useful for reacting to changes or interacting with DOM elements.

  🔹 **Unmounting Phase:**

  - `componentWillUnmount()` – Called right before the component is removed. Commonly used for cleanup like removing event listeners or clearing timers.

  - In functional components, React introduced the `useEffect` hook to handle lifecycle events. Depending on how we use it:

  - A `useEffect` with an empty dependency array `[]` acts like `componentDidMount`.
  - A `useEffect` that returns a cleanup function mimics `componentWillUnmount`.
  - A `useEffect` with dependencies can act like `componentDidUpdate`.

7. Explain Prop Drilling in React & Ways to avoid it ?

- Prop Drilling in React refers to the process of passing data from a parent component down to deeply nested child components through intermediate components, even if those intermediate components do not need to use the data themselves. This can make the code harder to read, maintain, and debug, especially in larger applications.

- For example, if I have a component hierarchy like:

- Parent → Child → Grandchild → TargetComponent

- And only TargetComponent needs access to a certain prop, I would have to pass it through each intermediate component unless I use a better state management strategy.

- To avoid Prop Drilling, here are some commonly used approaches:

  - 🧰 Context API (Built-in):

    - React’s Context API allows us to create a global context and share data across the component tree without having to pass props manually at every level.

    - It's suitable for managing theme, language settings, authentication, and other app-wide states.

  - ⚙️ State Management Libraries:

    - Tools like Redux, Zustand, or Recoil provide centralized state management solutions that eliminate the need for prop drilling entirely by keeping global state accessible from anywhere in the app.

  - 📦 Component Composition:

    - Instead of passing props down, we can compose components in such a way that the parent takes care of data and behavior, and injects them as children or through render props.

  - 🧩 Custom Hooks:

    - By extracting logic into custom hooks, we can encapsulate and reuse logic cleanly across components without unnecessary prop passing.

8. Create a Counter Web App Using React

- Develop a web application using react that functions as a counter.
- Includes two buttons in it UI.
  - Increment button
    - On clicking this button, the counter value should be incremented by one.
  - Decrement button
    - On clicking this button, the counter value should be decrement by one.
- Implementt the counter logic using React's state management.
- Ensure that the counter value is displayed in the UI and updates in real-time when incremented or decremented.
- Use appropraite React components and hooks to manage the counter state and handle button clicks events.

⚠️ **Note**: Please check the folder named **[counter-web-app](https://github.com/sreeramraghu04/r-assign01-p01.git)** to catch the answer code for this question.

- [live demo-counterwebapp](https://counterwebappassign01p01.netlify.app/)

9. Develop a GitHub User Finder web application using react the application should allow users to enter a GitHub username and display relevant information about the user, including their avatar and name.the design of the application should follow the layout provided in the image below.

- Use Github Api to get User Data "https://api.github.com/users

⚠️ **Note**: Please check the folder named **[github-user-finder](https://github.com/sreeramraghu04/r-assign01-p02.git)** to catch the answer code for this question.

- [live demo-githubuserfinder](https://githubuserfinderassign01p02.netlify.app/)

10. Develop a simple website using react, fetch and display products from the "https://fakestoreapi.com/products" API. The website should have the following fearures:

- Fetch products data from the "https://fakestoreapi.com/products" API.
- Display the products in a user-friendly Ul.
- Show Three products in a single row for optimal visibility and layout.
- Use React to achieve the desired layout and functionality.
- Ensure that the Ul is visually appealing and responsive.
- Implement error handling to handle any issues with API requests.
- Test the website thoroughly to ensure proper functionality and performance.
- Provide clear and concise documentation to guide users on how to interact with the website and understand its features.

  **Note**: Refer to the provided image or design specification for the desired layout and styling of the product display in a single row.

⚠️ **Note**: Please check the folder named **[fake-store-api](https://github.com/sreeramraghu04/r-assign01-p03.git)** to catch the answer code for this question.

- [live demo-fakestoreapi](https://fakestoreapiassign01p03.netlify.app/)
