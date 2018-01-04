import React from "react";

import Project from "./Project/Project.js";

import formalityImg1 from "./portfolio_images/formality/formality_portfolio_1.png";
import formalityImg2 from "./portfolio_images/formality/formality_portfolio_2.png";
import formalityImg3 from "./portfolio_images/formality/formality_portfolio_3.png";
import formalityImg4 from "./portfolio_images/formality/formality_portfolio_4.png";
// Portfolio images for Gryphus Capital
import gryphusImg1 from "./portfolio_images/gryphus_capital/gryphus_portfolio_1.png";
import gryphusImg2 from "./portfolio_images/gryphus_capital/gryphus_portfolio_2.png";
import gryphusImg3 from "./portfolio_images/gryphus_capital/gryphus_portfolio_3.png";
import gryphusImg4 from "./portfolio_images/gryphus_capital/gryphus_portfolio_4.png";
import gryphusImg5 from "./portfolio_images/gryphus_capital/gryphus_portfolio_5.png";
import gryphusImg6 from "./portfolio_images/gryphus_capital/gryphus_portfolio_6.png";

// Portfolio Images for Come Over
import comeOverImg1 from "./portfolio_images/come_over/come_over_portfolio_1.png";
import comeOverImg2 from "./portfolio_images/come_over/come_over_portfolio_2.png";
import comeOverImg3 from "./portfolio_images/come_over/come_over_portfolio_3.png";
import comeOverImg4 from "./portfolio_images/come_over/come_over_portfolio_4.png";
import comeOverImg5 from "./portfolio_images/come_over/come_over_portfolio_5.png";
import comeOverImg6 from "./portfolio_images/come_over/come_over_portfolio_6.png";

const projects = [
  {
    projectName: "Formality",
    projectAddress: "https://formality.rafaelgoesmann.com",
    projectDescription: [
      "Formality is a web application that connects people trying to rent out their clothes/sell their services with people in need of these for formal events. This project is made with React.js and Redux using ES7 on the frontend with node.js + koa.js + ES7 + Postgres on the backend.",
      "For this personal projects, I have decided to try and use best practises including: unit testing, virtualisation (using Docker), Version Control (using git), communication tools (Slack and Trello).",
      "Whilst this project did not completely take off, more than 50 people have put up a listing on the site."
    ],
    images: [formalityImg1, formalityImg2, formalityImg3, formalityImg4],
    githubName: "formality"
  },
  {
    projectName: "Juke Highlights",
    projectDescription: [
      "Juke Highlights is a bot which scrapes the site twitch.tv for the most popular clips for that current day. Since Juke Highlights is built with Golang, I was able to use Golang's strong concurrency primitives to download the videos concurrently.",
      "The program first downloads the most popular videos for that current day, it will then encode and concatentate them with ffmpeg and then will automaticaly get uploaded to youtube."
    ],
    githubName: "juke_highlights"
  },
  {
    projectName: "Gryphus Capital",
    projectAddress: "https://gryphuscapital.rafaelgoesmann.com",
    projectDescription: [
      "Gryphus capital is a website that I built for a customer. This project is uses simply html, css + bootstrap along with node.js on the backend to handle login and emails"
    ],
    images: [
      gryphusImg1,
      gryphusImg2,
      gryphusImg3,
      gryphusImg4,
      gryphusImg5,
      gryphusImg6
    ],
    githubName: null
  },
  {
    projectName: "Come Over",
    projectAddress: "come-over.rafaelgoesmann.com",
    projectDescription: [
      "Created a real-time event hosting solution which connects event hosts and people wanting to attend events.",
      "This website involved a backend REST JSON Api written in node.js and a frontend written in react.js with real-time communication managed by socket.io. The website is also mobile responsive and uses Log in with Facebook for secure login in flow.",
      "This project gained a 91.5% grade at the Dragons Den Young Enterprise Scheme Competition. I have also automated the deployment for this application which allowed me to deploy multiple times per day."
    ],
    images: [
      comeOverImg1,
      comeOverImg2,
      comeOverImg3,
      comeOverImg4,
      comeOverImg5,
      comeOverImg6
    ],
    githubName: "github.com/RafGDev/come-over"
  },
  {
    projectName: "Chat App",
    projectAddress: "chat-app.rafaelgoesmann.com",
    projectDescription: [
      "Created a chat application (bare bones version of slack) with multiple chat rooms and with private message functionality. This website involved a backend REST JSON API written in node.js and the frontend was written in angular. ",
      "I joined an online programming group and paired up with a someone from the US and a mentor to produce this project. This was the first project where I learned how to work in a team emulating a professional environment using tools like Slack and Trello"
    ],
    images: [],
    githubName: "github.com/catsWithPotatoes/chat-app"
  }
];

const Projects = props => {
  return (
    <section>
      <h2> Projects </h2>

      <div>
        {projects.map(project => {
          return (
            <Project
              project={project}
              key={project.projectName}
              goToPage={props.goToPage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
