import React from "react";

function StudentClg({ student }) {
  return (
    <div>
      <ul>
        <li>
          <h4>Name: {student.name}</h4>
        </li>
      </ul>
    </div>
  );
}

export default StudentClg;
