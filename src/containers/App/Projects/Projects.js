import React from "react";

import codequizImg1 from "./portfolio_images/codequiz/codequiz_portfolio_1.png";
import codequizImg3 from "./portfolio_images/codequiz/codequiz_portfolio_3.png";
import codequizImg4 from "./portfolio_images/codequiz/codequiz_portfolio_4.png";
import codequizImg5 from "./portfolio_images/codequiz/codequiz_portfolio_5.png";
import codequizImg6 from "./portfolio_images/codequiz/codequiz_portfolio_6.png";
// Portfolio Images for Come Over
import comeOverImg1 from "./portfolio_images/come_over/come_over_portfolio_1.png";
import comeOverImg2 from "./portfolio_images/come_over/come_over_portfolio_2.png";
import comeOverImg3 from "./portfolio_images/come_over/come_over_portfolio_3.png";
import comeOverImg4 from "./portfolio_images/come_over/come_over_portfolio_4.png";
import comeOverImg5 from "./portfolio_images/come_over/come_over_portfolio_5.png";
import comeOverImg6 from "./portfolio_images/come_over/come_over_portfolio_6.png";
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
import jukeHighlightsImg1 from "./portfolio_images/juke_highlights/juke_highlights_portfolio_1.png";
import jukeHighlightsImg2 from "./portfolio_images/juke_highlights/juke_highlights_portfolio_2.png";
import Project from "./Project/Project.js";

const projects = [
  {
    projectName: "Quiz Server",
    projectAddress: "https://codequiz.co.nz",
    projectDescription: [
      "Created a web app with a co-student that allows teachers to create programming quizzes for their students.",
      "When we were high school students, we would have appreciated a more structured way to learn programming and focus more on problem solving instead of just syntax. ",
      "An interesting aspect was utilising Docker to run untrusted students code in a sandbox. This project was built with Python (Flask), Vue.js, MySQL and Docker.",
    ],
    githubName: "https://github.com/marvin-raf/codequiz",
    images: [codequizImg1, codequizImg3, codequizImg4, codequizImg5, codequizImg6],
  },
  {
    projectName: "Automated Highlights Bot",
    projectAddress: null,
    projectDescription: [
      "Automated Highlights Bot is a bot which scrapes the site twitch.tv for the most popular clips for that current day. Since Juke Highlights is built with Golang, I was able to use Golang's strong concurrency primitives to download the videos concurrently.",
      "The program first downloads the most popular videos for that current day, it will then remove duplicates, encode and concatentate them with ffmpeg and then will automaticaly get uploaded to youtube with an automated thumbnail.",
      "I wanted my brother to be able to use juke highlights as well for the days that I couldn't so I also created an easy to use web interface for the previous command line application.",
    ],
    githubName: "https://github.com/RafGDev/juke-highlights",
    images: [jukeHighlightsImg1, jukeHighlightsImg2],
  },
  {
    projectName: "Ao Tawhiti Interview Schedular",
    projectAddress: "http://interviews.aotawhiti.school.nz",
    projectDescription: [
      'Created a web app for the school "Ao Tawhiti Unlimited Discoveryr" to automate the task of scheduling enrolment interviews.',
      "The application allows an admin person to create interview schedules for one or several interviewers and for a defined period.",
      "Parents can then view the available slots and book their preferred interview slot online. This project was built with Node.js, Vue.js and Mysql.",
    ],
    githubName: null,
    images: [jukeHighlightsImg1, jukeHighlightsImg2],
  },
  {
    projectName: "Formality",
    projectAddress: "https://formality.rafaelgoesmann.com",
    projectDescription: [
      "Formality is a web application that connects people trying to rent out their clothes/sell their services with people in need of these for formal events. This project is made with React.js and Redux using ES7 on the frontend with node.js + koa.js + ES7 + Postgres on the backend.",
      "For this personal projects, I have decided to try and use best practises including: unit testing, virtualisation (using Docker), Version Control (using git), communication tools (Slack and Trello).",
      "Whilst this project did not completely take off, more than 50 people have put up a listing on the site.",
    ],
    images: [formalityImg1, formalityImg2, formalityImg3, formalityImg4],
    githubName: "https://github.com/RafGDev/formality",
  },
  {
    projectName: "Gryphus Capital",
    projectAddress: "https://gryphuscapital.rafaelgoesmann.com",
    projectDescription: ["Gryphus capital is a website that I built for a customer. This project is uses simply html, css + bootstrap along with node.js on the backend to handle login and emails"],
    images: [gryphusImg1, gryphusImg2, gryphusImg3, gryphusImg4, gryphusImg5, gryphusImg6],
    githubName: null,
  },
];

const Projects = props => {
  return (
    <section>
      <h2>Projects</h2>

      <div>
        {projects.map(project => {
          return <Project project={project} key={project.projectName} goToPage={props.goToPage} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
