import React from "react";
import style from "./CssModule.module.css";

function CssModule() {
  return (
    <div>
      <h1 className={style.heading}>Concept of Modules in CSS</h1>
      <div className={style.card}>
        <img
          className={style.img}
          src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
          alt="Avatar"
        />
        <div className={style.textwrap}>
          <h4>Sujawal Middha</h4>
          <p>UI Dev</p>
        </div>
      </div>
    </div>
  );
}

export default CssModule;
