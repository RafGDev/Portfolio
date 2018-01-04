import React from "react";

import { Paper } from "material-ui";
import profilePicture from "./profile_picture.png";

const AboutMe = props => {
  return (
    <section id="about-me">
      <h2>About Me</h2>

      <div className="container">
        <div className="row">
          <Paper className="col-sm-8 col-sm-offset-2 about-me-box">
            <div className="col-sm-4 about-me-img">
              <img
                src={profilePicture}
                className="img-responsive portfolio-img"
                alt="Profile"
              />
            </div>
            <div className="col-sm-8 text-center about-me-content">
              <p>
                I am a highly motivated student currently completing a Computer
                Science degree at the University of Canterbury. I consider
                myself an eager programmer with a high level of professionalism
                and a commitment to producing high quality maintainable,
                scalable and robust technology solutions.
              </p>
              <p>
                I am excited to work with a company that has a real passion for
                their product/service. I also highly value being able to
                contribute to the companies goals while expanding my own skills
                at the same time.
              </p>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
