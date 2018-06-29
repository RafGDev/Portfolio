import React from "react";

import { Paper } from "material-ui";
import profilePicture from "./profile_picture.jpg";

import "./AboutMe.scss";

const AboutMe = props => {
  return (
    <section id="about-me">
      <h2>About Me</h2>

      <div className="container">
        <Paper
          className="col-lg-10 offset-lg-1 about-me-box"
          id="about-me-paper"
        >
          <div>
            <div class="row">
              <div className="col-md-6">
                <img
                  src={profilePicture}
                  className="img-fluid"
                  alt="Profile"
                />
              </div>
              <div className="col-md-6" id="about-me-content">
                <p>
                  I am a highly motivated student currently completing a
                  Computer Science degree at the University of Canterbury. I
                  consider myself an eager programmer with a high level of
                  professionalism and a commitment to producing high quality
                  maintainable, scalable and robust technology solutions.
                </p>
                <p>
                  I am excited to work with a company that has a real passion
                  for their product/service. I also highly value being able to
                  contribute to the companies goals while expanding my own
                  skills at the same time.
                </p>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default AboutMe;
