import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="section section--about">
        <div className="position-relative">
          <h2 className="section-heading about">About</h2>
          <div className="about-content">
            <h4 className="mb-4">
              Hi, i am varun a Front-end enginner with passion for the web and
              its infinite possibilites.
            </h4>
            <p className="text-dark mb-2">
              I ❤️ tinkering with new technologies and 🔨 together projects just
              to explore the possibilites of those 👨‍💻. My love for the 🕸 started
              while i was in college and now am obsessive about making things
              look great and the also having them load in blazing fast speed.
              Currently i work at{" "}
              <a
                className="d-inline-block"
                href="https://lollypop.design"
                target="_blank"
              >
                🍭
              </a>
              design studio where i work with a team of amazing designers and
              developer crafting great user experiences.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
