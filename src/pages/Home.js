import React from "react";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Lines from "../components/global/Lines";

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
