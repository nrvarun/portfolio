import React from "react";

const ProjectItem = props => {
  return (
    <div className="position-relative" id={props.itemId}>
      <div className="section-content">
        <h4 className="project-title">
          <a href={props.link} target="_blank">
            {props.name}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default ProjectItem;
