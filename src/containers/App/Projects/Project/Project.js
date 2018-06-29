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
      <Paper className="col-md-8 offset-md-2 project">
        <div className="row">
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

            {props.project.projectAddress === null ? null : (
              <a
                href={props.project.projectAddress}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RaisedButton
                  label={<span>Visit Site </span>}
                  backgroundColor="#1abc9c"
                  labelStyle={{ color: "#FFF" }}
                />
              </a>
            )}

            <br />
            <br />
            {props.project.githubName === null ? null : (
              <a
                href={`https://github.com/RafGDev/${props.project.githubName}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RaisedButton
                  label={<span>View Source</span>}
                  backgroundColor="#1abc9c"
                  labelStyle={{ color: "#FFF" }}
                />
              </a>
            )}
          </div>

          <div className="col-md-6 image-gallery">
            <ImageGallery
              items={images}
              slideInterval={2000}
              showPlayButton={false}
            />
          </div>
        </div>
      </Paper>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default Project;
