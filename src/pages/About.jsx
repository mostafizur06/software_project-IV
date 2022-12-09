import React, { useEffect, useState } from "react";
import RightNav from "../components/RightNav";
import avatar from "../assets/images/1.jpg";
import { aboutInfo } from "../data";
function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    if (aboutInfo) {
      setAbout(aboutInfo);
    }
  }, [about]);

  return (
    <>
      {about && (
        <div className="about-area">
          <div className="container">
            <div className="about-wrapper row">
              <div className="col-lg-3">
                <div className="about-image">
                  <img src={avatar} alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-info">
                  <h2>{about.name}</h2>
                  <h5>{about.title}</h5>
                  <p>{about.object}</p>
                  <div className="about-skills">
                    <h3>Skills</h3>

                    <ul>
                      {about.skills.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="extra-curriculam my-3">
                    <h3> Extra Curriculam Activities</h3>
                    <p>Executieve, DIU Computer Programming Club (CPC)</p>
                  </div>

                  <div className="about-Eductaion mt-3">
                    <h3>Education</h3>
                    <ul className="about-Eductaion-wrapper">
                      {about.eductionInfo.map((item) => (
                        <li className="education-title">
                          {item.title}

                          <ul className="education-info">
                            <li>{item.passingYear}</li>
                            <li>{item.institute}</li>
                            <li>{item.department}</li>
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <RightNav />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
