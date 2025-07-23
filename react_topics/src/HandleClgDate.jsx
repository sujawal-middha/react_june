import React from "react";
import StudentClg from "./StudentClg";

// const collegeData = [
//   {
//     name: "IET Alwar",
//     city: "Alwar",
//     website: "www.iet.com",
//     student: [
//       {
//         name: "ABC",
//         age: "21",
//         email: "abc@gmail.com",
//       },
//       {
//         name: "CDE",
//         age: "22",
//         email: "cde@gmail.com",
//       },
//       {
//         name: "EFG",
//         age: "23",
//         email: "efg@gmail.com",
//       },
//     ],
//   },
//   {
//     name: "IIT Delhi",
//     city: "Delhi",
//     website: "www.iitdelhi.com",
//     student: [
//       {
//         name: "ABC",
//         age: "21",
//         email: "abc@gmail.com",
//       },
//       {
//         name: "CDE",
//         age: "22",
//         email: "cde@gmail.com",
//       },
//       {
//         name: "EFG",
//         age: "23",
//         email: "efg@gmail.com",
//       },
//     ],
//   },
//   {
//     name: "DAV College,Delhi",
//     city: "Delhi",
//     website: "www.davdelhi.com",
//     student: [
//       {
//         name: "ABC",
//         age: "21",
//         email: "abc@gmail.com",
//       },
//       {
//         name: "CDE",
//         age: "22",
//         email: "cde@gmail.com",
//       },
//       {
//         name: "EFG",
//         age: "23",
//         email: "efg@gmail.com",
//       },
//     ],
//   },
// ];

function HandleClgDate({ college }) {
  //Passing data through props(college)
  console.log(college);

  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "20px",
        borderBottom: "2px solid #000",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Name: {college.name}</h1>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>Website: {college.website}</h3>
        </li>
        <h3>Students:</h3>
        <li>
          {college.student.map((student, index) => (
            <div key={index}>
              <StudentClg student={student} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default HandleClgDate;
