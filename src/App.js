import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui/styles";
import { Paper, RaisedButton } from "material-ui";
import ImageGallery from "react-image-gallery"
import logo from './logo.svg';
import './App.css';
import profilePicture from './profile_picture.png';
import formalityPicture from './formality_portfolio_1.png';

//Project data to be rendered on page
const projects = [
  {
    projectName: "Formality",
    projectAddress: "https://formality.rafaelgoesmann.com",
    projectDescription: ["Formality is a web application that connects people trying to rent out their clothes/sell their services with people in need of these for formal events. This project is made with React.js and Redux using ES7 on the frontend with node.js + koa.js + ES7 + Postgres on the backend.",
      "For this personal projects, I have decided to try and use best practises including: unit testing, virtualisation (using Docker), Version Control (using git), communication tools (Slack and Trello).",
                         "Whilst this project did not completely take off, more than 50 people have put up a listing on the site."],
    images: [formalityPicture],
    githubName: "formality"
  }
];

const Project = (props) => {

  const images = props.project.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });



  return (
    <Paper className="col-md-8 col-md-offset-2 project">      
      
      <div className="col-md-6 project-content">
        <a href="https://formality.rafaelgoesmann.com" target="_blank" rel="noopener noreferrer"><h4>{props.project.projectName}</h4></a>
        
        {props.project.projectDescription.map((currentLine) => {
          return (
            <p>{currentLine}</p>
          );
        })}

        <RaisedButton
          label={<span>Visit Site </span>}
          backgroundColor="#1abc9c"
          labelStyle={{color: "#FFF"}} 
        />

        <br />
        <br />

        <RaisedButton
          label={<span>View Source</span>}
          backgroundColor="#1abc9c"
          labelStyle={{color: "#FFF"}}
        />
        

      </div>
      <div className="col-md-6 image-gallery">
        <ImageGallery 
          items={images}
          slideInterval={2000}
          showPlayButton={false}
        />  
      </div>
    </Paper>
  );
};

const Projects = (props) => { //return (
  console.log(props.goToPage);
  return (
    <div>
      {projects.map((project) => {
        return <Project project={project} key={project.projectName} goToPage={props.goToPage} />
      })}
    </div>
  );
};

class App extends Component {

  gotoPage = (arg1, arg2) => {
    console.log(arg1, arg2); 
  };

  render() {

    return (
      <MuiThemeProvider>
        <div>
        <section className="header" id="intro">
          <i className="fa fa-bars" id="bars" aria-hidden="true"/>
          <h1>Rafael Goesmann</h1>
          <h2>Full Stack Developer</h2>
          <div className="icons">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/RafGDev"><i className="fa fa-github icon" aria-hidden="true"/></a>
            <a href="mailto:rafaelgoesmann@gmail.com"><i className="fa fa-envelope icon" aria-hidden="true"/></a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/rafael-goesmann-083349130"><i className="fa fa-linkedin icon" aria-hidden="true"/></a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://rafaelgoesmann.com/resume.pdf"><i className="fa fa-file-pdf-o icon" aria-hidden="true"/></a>
          </div>
          <div className="arrow-down">
            <i className="fa fa-arrow-down" id="arrow" aria-hidden="true"/>
          </div>
        </section>
        <section id="about-me">
          <h2>About Me</h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-4 about-me-img">
                  <img src={profilePicture} className="img-responsive portfolio-img" alt="Profile" />
                </div>
                <div className="col-sm-8 text-center about-me-content">
                  <p>I am a highly motivated student currently completing a Computer Science
                    degree at the University of Canterbury. I consider myself an eager programmer
                    with a high level of professionalism and a commitment to producing high quality
                    maintainable, scalable and robust technology solutions.
                  </p>
                  <p>I am excited to work with a company that has a real passion for their
                    product/service. I also highly value being able to contribute to the companies
                    goals while expanding my own skills at the same time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="col-sm-4 skill-title">
                  <h3>Frontend</h3>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-react-original-wordmark colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-javascript-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-html5-plain-wordmark colored skill-icon"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-css3-plain-wordmark colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-sass-original colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-angularjs-plain colored skill-icon"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-jquery-plain-wordmark colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-mocha-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-photoshop-plain colored skill-icon"/>
                    </div>
                  </div>
                  <div className="col-xs-3 skill-box"/>
                </div>
                <div className="col-sm-4 skill-title">
                  <h3>Backend/Other</h3>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-nodejs-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-python-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-postgresql-plain colored skill-icon"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-php-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-mysql-plain-wordmark colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-express-original-wordmark colored skill-icon"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-go-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-java-plain-wordmark colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-c-plain colored skill-icon"/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 skill-title">
                  <h3>Tools</h3>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-linux-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-vim-plain colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-docker-plain colored skill-icon"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-git-plain-wordmark colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-nginx-original colored skill-icon"/>
                    </div>
                    <div className="col-xs-4 skill-box">
                      <i className="devicon-slack-plain-wordmark colored skill-icon"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2> Projects </h2>

          <Projects goToPage={this.goToPage} />
        </section>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
