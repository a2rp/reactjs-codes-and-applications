import "./QNABeginnerLevel.module.css";

const QNABeginnerLevel = () => {
    return (
        <div>
            <h1>React.js</h1>
            React is a declarative, efficient, and flexible JavaScript library for
            building user interfaces or UI components. It lets us compose complex UIs
            from small and isolated pieces of code called "components". It is used by large, established companies and newly-minted startups alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). React brings many advantages to the table, making it a better choice
            than other frameworks like Angular.js.


            <h1>MVC architecture</h1>
            MVC is an architectural pattern consisting of three parts: Model, View, Controller.
            <ul>
                <li><b>Model:</b> Handles data logic.</li>
                <li><b>View:</b> It displays the information from the model to the user.</li>
                <li><b>Controller:</b> It controls the data flow into a model object and updates the view whenever data changes.</li>
            </ul>
            It is invented by Trygve Reenskau.


            <h1>React Virtual DOM</h1>
            The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app. Since "virtual DOM" is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term "virtual DOM" is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called "fibers" to hold additional information about the component tree. They may also be considered a part of "virtual DOM" implementation in React.


            <h1>Is the Shadow DOM the same as the Virtual DOM ???</h1>
            No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.


            <h1>React Fiber</h1>
            Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM


            <h1>Building blocks of React</h1>
            <ul>
                <li>JSX [JSX stands for JavaScript XML.]</li>
                <li>Components - Components is a concept that helps to enforce the single-responsibility principle in React.</li>
                <li>
                    State and props<br />
                    Props - Passing data from one component to the other is done through properties or as known in React props.
                    <br />
                    State - State allows components to change the output when a user action has taken place, or when we receive recent network data etc., without violating the above-mentioned rule.
                </li>
                <li>
                    Conditional rendering: In React we use the JavaScript conditional if statement or ternary operator within the JSX code.
                </li>
            </ul>


            <h1>Props</h1>
            Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties. React Props are like function arguments in JavaScript and attributes in HTML. The component receives the argument as a props object

            <h1>State</h1>
            React components has a built-in state object. The state object is where we store property values that belong to the component. When the state object changes, the component re-renders.

            <h1>Virtual DOM</h1>
            Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with "Real DOM" by a library such as ReactDOM and this process is called reconciliation. Virtual DOM makes the performance faster, not because the processing itself is done in less time.

            <h1>JSX</h1>
            JSX stands for JavaScript XML. Instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript. It is simply a syntax extension of React. It allows us to directly write HTML in React.

            <h1>Components</h1>
            Components are like functions that return HTML elements. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, "Class components" and "Function components". In older React code bases, we may find "Class components" primarily used. It is now suggested to use "Function components" along with Hooks, which were added in React 16.8.

            <h1>How do browsers read JSX ?</h1>
            JSX isn't directly supported by browsers, requiring conversion by tools like Babel to transform JSX into valid JavaScript. This transpilation ensures browsers can interpret and execute the JSX-embedded code in React applications.

            <h1>Key</h1>
            A key is a unique identifier. In React, it is used to identify which items have changed, updated, or deleted from the Lists. It is useful when we dynamically created components or when the users alter the lists. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: const numbers = [1, 2, 3, 4, 5]; const listItems = numbers.

            <h1>Comments</h1>
            To comment in React, we can use the syntax &#123; /* */ &#125; . Anything we put between these two sets of curly braces will be treated as a comment and will not be executed by the JavaScript engine.

            <h1>React vs Angular</h1>
            React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size.

            <h1>render() method in react</h1>
            In React, Render is the technique that can  render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.

            <h1>HOC - Higher order functions</h1>
            Higher-order components (HOCs) are a powerful feature of the React library. They allow us to reuse component logic across multiple components. In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

            <h1>Functional vs Class components</h1>
            A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).	A class component requires us to extend from React. Component and create a render function which returns a React element.
            <br />
            <br />
            Functional component run from top to bottom and once the function is returned it cant be kept alive.	Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.
            <br />
            <br />
            Functional also known as stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.	Class also known as stateful components because they implement logic and state.
            <br />
            <br />
            React lifecycle methods (for example, componentDidMount) cannot be used in functional components.	React lifecycle methods can be used inside class components (for example, componentDidMount).
            <br /><br />
            Hooks can be easily used in functional components to make them Stateful. It requires different syntax inside a class component to implement hooks.
            <br /><br />
            In functional constructors are not used. In class Constructor are used as it needs to store state.

            <h1>One way data binding</h1>
            One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That's why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.

            <h1>Conditional rendering</h1>
            In React, conditional rendering is the process of displaying different content based on certain conditions or states. It allows us to create dynamic user interfaces that can adapt to changes in data and user interactions. In this process, we can use conditional statements to decide what content should be rendered.

            <h1>React Router</h1>
            React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

            <h1>Components of react router</h1>
            There are three primary categories of components in React Router:
            <ul>
                <li>routers, like &lt;BrowserRouter&gt; and &lt;HashRouter&gt;</li>
                <li>route matchers, like &lt;Route&gt; and &lt;Switch&gt;</li>
                <li>and navigation, like &lt;Link&gt;, &lt;NavLink&gt;, and &lt;Redirect&gt;</li>
            </ul>

            <h1>Lifecycle methods of react components</h1>
            The component's lifecycle consists of three phases:
            <ul>
                <li>Mounting lifecycle methods, that is inserting elements into the DOM.</li>
                <li>Updating, which involves methods for updating components in the DOM.</li>
                <li>Unmounting, that is removing a component from the DOM.</li>
            </ul>

            <h1>usestate in react</h1>
            The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application. To use the useState Hook, we first need to import it into our component. We initialize our state by calling useState in our function component. useState accepts an initial state and returns two values:
            1. The current state. 2. A function that updates the state.

            <h1>ref in react</h1>
            A ref is a plain JavaScript object with a single property called current , which we can read or set. We can ask React to give us a ref by calling the useRef Hook. Like state, refs let us retain information between re-renders of a component. Unlike state, setting the ref's current value does not trigger a re-render.

            <h1>react hooks</h1>
            Hooks allow us to "hook" into React features such as state and lifecycle methods. Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

            <h1>react useeffect</h1>
            The useEffect Hook allows us to perform side effects in our components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

            <h1>react fragment</h1>
            React Fragment is a feature in React that allows us to return multiple elements from a React component by allowing us to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, we'll need to wrap the element in a root element.

            <h1>react developer tools</h1>
            React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows us to inspect the React component hierarchies in the Chrome Developer Tools.

            <h1>styling in react</h1>
            There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:
            <ul>
                <li>Inline styling - To style an element with the inline style attribute, the value must be a JavaScript object. In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling is written inside two sets of curly braces</li>
                <li>CSS stylesheets - We can write our CSS styling in a separate file, just save the file with the .css file extension, and import it in our application. </li>
                <li>CSS Modules - CSS Modules are convenient for components that are placed in separate files. The CSS inside a module is available only for the component that imported it, and we do not have to worry about name conflicts.</li>
            </ul>

            <h1>prop drilling</h1>
            Prop drilling is the process of passing down data or state through multiple layers of a component hierarchy. By the way, it refers to the practice of passing data from a parent component to its children and then from the children to their own children and so on, until the data reaches the desired component that needs it. Prop drilling can be a necessary and effective way to manage application state, it can also become a problem when the hierarchy of components becomes too deep or complex. This can lead to several issues.

            <h1>controlled vs uncntrolled components</h1>
            A controlled component is a component which is managed by its parent component and its value is updated using props whereas uncontrolled components maintain their own state and data flow is done inside the component only unlike controlled components which pass data from parent to child.

            <h1>es5 vs ws6 in react</h1>
            ES5 uses the Require js module to include a react module or a component. ES6 uses the import module to include a react module or a component. ES5 uses the function keyword along with the return keyword to define a function. In ES6 we don't need to use a function keyword to define a function.

            <h1>synthetic events</h1>
            In order to work as a cross-browser application, React has created a wrapper same as the native browser in order to avoid creating multiple implementations for multiple methods for multiple browsers, creating common names for all events across browsers. Another benefit is that it increases the performance of the application as React reuses the event object.

            <h1>custom hooks</h1>
            Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

            <h1>how to optimize a react code</h1>
            <ul>
                <li>Using binding functions in constructors</li>
                <li>Eliminating the use of inline attributes as they slow the process of loading</li>
                <li>Avoiding extra tags by using React fragments</li>
                <li>Lazy loading</li>
            </ul>

            <h1>useref vs createref</h1>
            React.useRef(initValue) return a ref {`{current: initValue }`} It is remember ref value across multiple render of function component. It is advise to use in Function component
            <br />
            React.createRef(initValue) also return a ref  {`{current: initValue }`}
            it is not remember ref value across multiple render of function components. It is advise to use in class based component

            <h1>react redux</h1>
            React Redux is the official React UI bindings layer for Redux. It lets our React components read data from a Redux store, and dispatch actions to the store to update state.

            <h1>context api</h1>
            Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components. The context object has a few properties: SomeContext.Provider lets us provide the context value to components. SomeContext.Consumer is an alternative and rarely used way to read the context value.

            <h1>cors</h1>
            In ReactJS, Cross-Origin Resource Sharing or CORS requests refers to the method that allows us to make requests to the server deployed at a different domain.

            <h1>axios in react</h1>
            Axios is a popular JavaScript library for making HTTP requests from a web browser or a Node. js server. It performs various operations, such as retrieving and sending data and handling responses.

            <h1>Material UI</h1>
            Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.

            <h1>useMemo</h1>
            The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

            <h1>useEffect vs useCallback vs useMemo</h1>
            <ul>
                <li>useEffect - It's the alternative for the class component lifecycle methods componentDidMount, componentWillUnmount, componentDidUpdate, etc. You can also use it to create a side effect when dependencies change, i.e. "If some variable changes, do this".</li>
                <li>useCallback - On every render, everything that's inside a functional component will run again. If a child component has a dependency on a function from the parent component, the child will re-render every time the parent re-renders even if that function "doesn't change" (the reference changes, but what the function does won't). It's used for optimization by avoiding unnecessary renders from the child, making the function change the reference only when dependencies change. You should use it when a function is a dependency of a side effect e.g. useEffect.</li>
                <li>useMemo - It will run on every render, but with cached values. It will only use new values when certain dependencies change. It's used for optimization when you have expensive computations. Here is also a good answer that explains it.</li>
            </ul>

            <h1>types of router</h1>
            <ul>
                <li>BrowserRouter - Stores current URL in the address bar</li>
                <li>HashRouter - Stores current URL in the # part of the address bar</li>
                <li>MemoryRouter - Stores current URL in the memory</li>
            </ul>

            <h1>react strictmode</h1>
            React's Strict mode helps developers identify and fix issues in their code. Strict mode runs in development mode and can be enabled by adding a component at the beginning of the application. It checks for potential problems in the code, such as possible memory leaks, and warns the user about their presence.




        </div>
    )
}

export default QNABeginnerLevel
