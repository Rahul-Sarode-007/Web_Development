# App Flow
App.jsx
    Navbar.jsx
        Button.jsx
            Component1.jsx

# Note:
1. Create a .js file and use the `createContext` hook to create a context, store the context in a variable, and export it.
2. In the component where you want to provide the context value, import the context and wrap the relevant part of your component tree with the context provider. Use the `value` prop to pass any value to the provider.
3. In any component where you want to consume the context value, import the context and the `useContext` hook. Use the `useContext` hook with the imported context and store the value in a variable. You can then use this variable anywhere in the component.

Example:

**context.js**:
```jsx
import { createContext } from "react";

export const counterContext = createContext(0);

```

**App.js**:
```jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import { counterContext } from './context/context.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={count}>
      <Navbar />
      {/* other components */}
    </counterContext.Provider>
  );
}

export default App;
```


**Component1.jsx**:
```jsx
import React, { useContext } from 'react';
import { counterContext } from '../context/context.js';

const Component1 = () => {
  const counter = useContext(counterContext);
  return <div>{counter}</div>;
}

export default Component1;

```
