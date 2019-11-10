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
          desc="London based frontend developer and designer aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis."
        />
      </section>
      <Footer/>
    </main>
  );
}

export default App;
