import React from "react";

const skills = [
  {
    title: "Frontend",
    data: [
      [
        "devicon-react-original colored",
        "devicon-javascript-plain colored",
        "devicon-html5-plain colored"
      ],
      [
        "devicon-css3-plain colored",
        "devicon-sass-original colored",
        "devicon-angularjs-plain colored"
      ],
      [
        "devicon-jquery-plain colored",
        "devicon-photoshop-plain colored",
        "devicon-mocha-plain colored"
      ]
    ]
  },
  {
    title: "Backend/Other",
    data: [
      [
        "devicon-nodejs-plain colored",
        "devicon-python-plain colored",
        "devicon-postgresql-plain colored"
      ],
      [
        "devicon-php-plain colored",
        "devicon-mysql-plain colored",
        "devicon-go-plain colored"
      ],
      [
        "devicon-java-plain colored",
        "devicon-c-plain colored",
        "devicon-express-original colored"
      ]
    ]
  },
  {
    title: "Tools",
    data: [
      [
        "devicon-linux-plain colored",
        "devicon-vim-plain colored",
        "devicon-docker-plain colored"
      ],
      [
        "devicon-git-plain colored",
        "devicon-nginx-original colored",
        "devicon-slack-plain colored"
      ],
      [
        "devicon-babel-plain colored",
        "devicon-trello-plain colored",
        "devicon-webpack-plain colored"
      ]
    ]
  }
];

const Skills = props => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container">
        <div className="row">
          {skills.map(skill => {
            return (
              <div className="col-md-4 skill-title">
                <h3>{skill.title}</h3>

                {skill.data.map(row => {
                  return (
                    <div className="row">
                      {row.map(icon => {
                        return (
                          <div className="col-4 skill-box">
                            <i className={`${icon} skill-icon`} />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
