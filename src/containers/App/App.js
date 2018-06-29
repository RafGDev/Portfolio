import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { Drawer } from "material-ui";
import ImageGallery from "react-image-gallery";
import "./App.css";

import $ from "jquery";
//Including section components
import Header from "./Header/Header.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Skills from "./Skills/Skills.js";
import Projects from "./Projects/Projects.js";

class App extends Component {
  state = {
    drawerOpen: false
  };

  goToPage = location => {
    window.location = location;
  };

  goToSection = section => {
    console.log($(section));

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top
      },
      "slow"
    );
  };

  toggleSidebar = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header
            goToSection={this.goToSection}
            toggleSidebar={this.toggleSidebar}
          />

          <AboutMe />

          <Skills />

          <Projects goToPage={this.goToPage} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
