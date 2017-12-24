import React from "react";

import { Paper, RaisedButton } from "material-ui";
import ImageGallery from "react-image-gallery";

const Project = props => {
  const images = props.project.images.map(image => {
    return {
      original: image,
      thumbnail: image
    };
  });

  return (
    <div>
      <Paper className="col-md-8 col-md-offset-2 project">
        <div className="col-md-6 project-content">
          <a
            href={props.project.projectAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>{props.project.projectName}</h4>
          </a>

          {props.project.projectDescription.map(currentLine => {
            return <p>{currentLine}</p>;
          })}

          <RaisedButton
            onClick={() => {
              props.goToPage(props.project.projectAddress);
            }}
            label={<span>Visit Site </span>}
            backgroundColor="#1abc9c"
            labelStyle={{ color: "#FFF" }}
          />

          <br />
          <br />

          {props.project.githubName === null ? null : (
            <RaisedButton
              onClick={props.goToPage.bind(
                `https://github.com/RafGDev/${props.project.githubName}`
              )}
              label={<span>View Source</span>}
              backgroundColor="#1abc9c"
              labelStyle={{ color: "#FFF" }}
            />
          )}
        </div>

        <div className="col-md-6 image-gallery">
          <ImageGallery
            items={images}
            slideInterval={2000}
            showPlayButton={false}
          />
        </div>
      </Paper>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default Project;
