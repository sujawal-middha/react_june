import React, { useEffect } from "react";

//Handle Props Side Effect with useEffect in component

const Counter = ({ count, data }) => {
  // const handleCounter = () => {
  //   console.log("HandleCounter called");
  // };
  // handleCounter();

  // const handleData = () => {
  //   console.log("HandleData called");
  // };
  // handleData();
  //Now it is occurring side-effect here means when we click on button then at the same time function handCounter is being called which is wrong. it needs to be called for one time only. so to correct that we need to use useEffect here and call the function in it. for ex -
  // useEffect(() => {
  //   handleCounter();
  // }, []);

  // useEffect(() => {
  //   handleData();
  // }, []);

  //! Life Cycle in React JS

  //* Mount concept - mount ka mtlb birth hona as human lifecycle
  useEffect(() => {
    console.log("Mounting phase only");
  }, []);

  //* Update Concept - teenage,maturity, human changes in human life cycle
  useEffect(() => {
    console.log("Update phase only");
  }, [count]);

  //* Unmount Concept - means death concept in human life cycle or after that rebirth
  useEffect(() => {
    return () => {
      console.log("Unmount fase only");
    };
  }, []);

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  );
};

export default Counter;
