import React from "react";

const Header = props => {
  return (
    <section className="header" id="intro">
      <h1>Rafael Goesmann</h1>
      <h2>Full Stack Developer</h2>
      <div className="icons">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/RafGDev"
        >
          <i className="fa fa-github icon" aria-hidden="true" />
        </a>
        <a href="mailto:rafaelgoesmann@gmail.com">
          <i className="fa fa-envelope icon" aria-hidden="true" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/rafael-goesmann-083349130"
        >
          <i className="fa fa-linkedin icon" aria-hidden="true" />
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://rafaelgoesmann.com/resume.pdf"
        >
          <i className="fa fa-file-pdf-o icon" aria-hidden="true" />
        </a>
      </div>
      <div
        className="arrow-down"
        onClick={() => {
          props.goToSection("#about-me");
        }}
      >
        <i className="fa fa-arrow-down" id="arrow" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Header;
