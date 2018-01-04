import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { Paper, RaisedButton } from "material-ui";
import ImageGallery from "react-image-gallery";
import "./App.css";

//Including section components
import Header from "./Header/Header.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Skills from "./Skills/Skills.js";
import Projects from "./Projects/Projects.js";

class App extends Component {
  goToPage = location => {
    window.location = location;
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />

          <AboutMe />

          <Skills />

          <Projects goToPage={this.goToPage} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
