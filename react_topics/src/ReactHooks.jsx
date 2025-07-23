import React, { useEffect, useState } from "react";
import Counter from "./Counter";

function ReactHooks() {
  //def: introduced in react16. To achieve State, life cycle, other feature in functional component we use hooks
  // Popular Hooks: useState, useEffect, useContext, useRef, useReducer, etc and custom hooks bhi bnaa skte ho.
  //1. useEffect Hook- jab hm log react js ke components me kaam krte he vha pr state declare krte he, props use krte he, buttons clicks pr event use krte he to vha pr apko sideEffects dekhne ko milte he to hum use control krne ke liye useEffect ka use krte he.
  // Where it get used: Api se data fetch krte he tb, life cycle methods me, DOM manipulation me and aur bhi kyi pr use hota he.
  // syntex:
  // useEffect((pass function as a parameter, dependency) => {
  // write your code
  // }, [state or props])
  // for example:

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);

  // function callOnce() {
  //   console.log("Call Once function calling..");
  // }
  // callOnce();
  // The problem here is when we click on any below button the above function callOnce() get called with them which is wrong. so to prevent it calling this function on click we need to use useEffect(). like below:
  // useEffect(() => callOnce(), []);
  // Now in useEffect the function callOnce() called for one time only not like repeated for couple of times. is trike se hm side effects ko control kr skte he.

  //Now if we want to call the function for count button only-
  // useEffect(() => {
  //   counterFunction();
  // }, [count]);
  // function counterFunction() {
  //   console.log("counterfunction", count);
  // }

  //!Important for Interview Questions:
  // Handling Dependency of useEffect function:
  // useEffect(()=>{
  // call every time
  // })

  // useEffect(()=>{
  // call only once
  // },[])

  // useEffect(()=>{
  // call on changing single state
  // },[state1])

  // useEffect(()=>{
  // call on changing both state
  // },[state1, state2])

  // useEffect(()=>{
  // call on changing props
  // },[prop1, prop2])

  return (
    <div>
      <h1>useEffect Hook</h1>
      {/* <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      <button onClick={() => setData(data + 1)}>Data: {data}</button> */}
      <h1>Handle Props Side Effect with useEffect in component</h1>
      {/* <Counter count={count} data={data} />
      <button onClick={() => setCount(count + 1)}> Counter {count} </button>
      <button onClick={() => setData(data + 1)}> Data {data} </button> */}
      <h1>Life Cycle in React JS</h1>
      {/* <Counter count={count} data={data} /> */}
      //! display using for unmount concept
      {display ? <Counter count={count} data={data} /> : null}
      <button onClick={() => setCount(count + 1)}> Counter {count} </button>
      <button onClick={() => setData(data + 1)}> Data {data} </button>
      <button onClick={() => setDisplay(!display)}> Toggle </button>
    </div>
  );
}

export default ReactHooks;
