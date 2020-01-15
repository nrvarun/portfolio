import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Lines from "../components/Lines";

import Home from "../components/Home";

const HomePage = () => {
  return (
    <section className="section section--home">
      <Lines />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </section>
  );
};

export default HomePage;
