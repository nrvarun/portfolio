import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="section section--home">
          <main>
            <h2>About</h2>
          </main>
        </section>
        <Footer />
      </>
    );
  }
}

export default About;
