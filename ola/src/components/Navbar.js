import React from "react";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="car-logo">
          <span className="logo-text">Cars</span>
        </div>

        <span>
          <a href="#">Contacts</a>
        </span>
        <span>
          <a href="#">Histroy</a>
        </span>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default Navbar;
