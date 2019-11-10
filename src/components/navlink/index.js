import React from 'react';

function App(props) {
  return (
    <a className="nav-link" href={props.link} target={props.newTab === "true" ? '_blank': ''}>{props.text}</a>
  );
}

export default App;
