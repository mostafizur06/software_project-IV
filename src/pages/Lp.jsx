import React from "react";

import { lpInfo } from "../data";
function Lp() {
  return (
    <>
      <div className="about-area py-5">
        <div className="container">
          {lpInfo.map((item) => (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MV_dlAjll5A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    </>
  );
}

export default Lp;
