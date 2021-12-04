import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import ReactGA from "react-ga";
// import TagManager from "react-gtm-module";

// const tagManagerArgs = {
//   gtmId: "GTM-NT9BZ69",
// };

// TagManager.initialize(tagManagerArgs);

// ReactGA.initialize("UA-155539487-1");
// ReactGA.set({ page: window.location.pathname });
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
