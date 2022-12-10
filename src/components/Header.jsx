import React from "react";
import avatar from "../assets/images/sohan.png";

function Header() {
  return (
    <div>
      <div className="header-area">
        <div className="container">
          <div className="header">
            <div className="header-image-wrapper">
              <img src={avatar} alt="" />
            </div>
            <div className="head-title">
              <h1>Mostafizur Rahman Sohan</h1>
              <p>Student &nbsp; | &nbsp; Learner</p>
              <p>Daffodil International University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
