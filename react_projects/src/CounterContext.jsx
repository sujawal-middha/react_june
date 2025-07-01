import { createContext } from "react";
import { useState } from "react";

// use state props practice, context practice and route practice
export const CounterContext = createContext(); // context create huaa

export const CounterProvider = ({ children }) => {
  //provider create huaa and yah pr jo context use hua usme se data provide kiya jaa raha hai
  const [count, setCount] = useState(0);

  // const inc = () => setCount(count + 1);
  // const dec = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

//props and useState first practice

//then context API 2nd child to parent 3 steps - 1 create context line no. 5, 2 create provider line no. 7, 3 use context in child component - used in another file
// Counter.jsx file

// then 3rd advanced topics
// redux toolkit
