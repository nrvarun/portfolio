import React from 'react';

import Header from './components/header/index';
import Content from './components/content';
import Footer from './components/footer';
import Lines from './components/lines';

function App() {
  return (
    <main>
      <Lines/>
      <Header/>
      <section className="section section--home">
        <Content
          heading="VARUN NR"
          subheading="Front-end Developer"
          desc="Bengaluru based frontend Dev with a love for UX and a curious guy fascinated by the endless possibilites of the Web!"
        />
      </section>
      <Footer/>
    </main>
  );
}

export default App;
