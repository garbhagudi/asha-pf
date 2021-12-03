import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Journey from "./components/Journey";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Journey} path="/journey" />
          <Route component={Contact} path="/contact" />
          <Route component={Gallery} path="/gallery" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
