# React `useState()` Hook

## Introduction

`useState()` is a built-in React Hook used for adding state to functional components in React. It allows you to create and manage state variables within functional components without the need for class components.

## Syntax

The syntax for using `useState()` is:

```javascript
const [stateVariable, setStateFunction] = useState(initialState);
```
## Usage
**State Initialization**: Pass the initial value of the state variable as an argument. This value is used only during the initial rendering of the component.

**Return Values: useState()** returns an array containing two elements:

*The current value of the state.*
A function that allows you to update the state.
State Updates: When using the setStateFunction, you can pass either a new value or a function that computes the new value based on the previous state.

**Multiple State Variables**: You can call useState() multiple times within a single component to manage different pieces of state independently.

**Immutability**: Ensure immutability when updating state by creating a new state object or value instead of mutating the state directly.

**Functional Updates**: Use the functional update form of setStateFunction if the new state value depends on the previous state value to avoid race conditions.

**Lazy Initialization**: The initialState argument in useState() is lazily evaluated. You can pass a function as the initialState, which will be called only once during the initial rendering.

**Re-rendering**: Calling setStateFunction does not immediately re-render the component. React will batch multiple state updates into a single re-render for performance reasons.

**Conclusion**
useState() is one of the most commonly used hooks in React, allowing functional components to maintain their own state and become more powerful and flexible.