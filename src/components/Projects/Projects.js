import React, { Component } from "react";

import gsap from "gsap";

import ProjectItem from "./ProjectItem";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // create a timeline and add a tween
    window.addEventListener("scroll", this.animateHeading);
  }

  componentWillMount() {
    // create a timeline and add a tween
    window.removeEventListener("scroll", this.animateHeading);
  }

  animateHeading = e => {
    const myTimeline = gsap.timeline({ paused: true });

    myTimeline.to(".project.runadam", {
      x: "-100%",
      duration: 1,
      ease: "power2.out"
    });
    console.log(this);
  };

  render() {
    return (
      <>
        <h2 className="section-heading">Projects</h2>
        <section className="section section--projects">
          <div className="container">
            <div className="position-relative">
              <ul className="projects-list">
                <li className="project runadam">
                  <ProjectItem
                    itemId="runadam"
                    name="Runadam"
                    link="https://runadam.com/"
                  />
                </li>
                <li className="project runadam2">
                  <ProjectItem
                    itemId="hexaware"
                    name="Hexaware"
                    link="https://hexaware.com/"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
