import React, { Component } from "react";
import Header from "../components/global/Header/";
import Footer from "../components/global/Footer/";
import Lines from "../components/global/Lines";
import About from "../components/About/About";

class AboutPage extends Component {
  render() {
    return (
      <>
        <Lines />
        <Header />
        <main>
          <About />
        </main>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
