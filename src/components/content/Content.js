import React from "react";

function Content(props) {
  return (
    <div className="content">
      <div className="position-relative mb-4 mb-md-5">
        <h1 className="content__heading">{props.heading}</h1>
        <p className="content__subheading">{props.subheading}</p>
      </div>
      <p className="content__desc">{props.desc}</p>
    </div>
  );
}

export default Content;
