import React from "react";

function InlineCss() {
  //! we can even use the css even as a object. for example:
  const cardStyle = {
    width: "200px",
    border: "1px solid white",
    boxShadow: "1px 2px 3px 0px #ccc",
    margin: "10px",
  };

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>
        Inline Styles in React JS
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          // style={{
          //   width: "200px",
          //   border: "1px solid white",
          //   boxShadow: "1px 2px 3px 0px #ccc",
          //   margin: "10px",
          // }}
          //! using the above object(cardStyle) here -
          style={cardStyle}
        >
          <img
            style={{
              width: "200px",
            }}
            src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
            alt="Avatar"
            className="avatar"
          />
          <div style={{ padding: "5px" }}>
            <h4>Sujawal Middha</h4>
            <p>UI Developer</p>
          </div>
        </div>
        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>
        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>

        <div>
          <div
            //! using the above object(cardStyle) here and We can create many of the cards with the object: -
            style={cardStyle}
          >
            <img
              style={{
                width: "200px",
              }}
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
              alt="Avatar"
              className="avatar"
            />
            <div style={{ padding: "5px" }}>
              <h4>Sujawal Middha</h4>
              <p>UI Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InlineCss;
