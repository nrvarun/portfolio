import React, { Component } from "react";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Lines from "../components/global/Lines";

import Projects from "../components/Projects/Projects";

class ProjectsPage extends Component {
  render() {
    return (
      <>
        <Lines />
        <Header />
        <main>
          <Projects />
        </main>
        <Footer />
      </>
    );
  }
}

export default ProjectsPage;
