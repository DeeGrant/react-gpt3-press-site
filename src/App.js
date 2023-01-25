import './App.css';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, CTA, Navbar } from './components';

function App() {
  return (
      <div className="App">
          <section className="gradient__bg">
              <Navbar></Navbar>
              <Header></Header>
              <Brand></Brand>
          </section>
          <WhatGPT3></WhatGPT3>
          <section className="gradient__bg">
              <Features></Features>
              <Possibility></Possibility>
          </section>
          <CTA></CTA>
          <Blog></Blog>
          <Footer></Footer>
      </div>
  );
}

export default App;
