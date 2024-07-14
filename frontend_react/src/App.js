import React from "react";

import {
  About,
  Certificates,
  Work,
  Skills,
  Testimonial,
  Footer,
  Header,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificates />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
