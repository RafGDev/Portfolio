import React from "react"; import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Global css properties
import App from "./containers/App/App.js";
import "./index.css";

// CSS dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "devicon-2.2/devicon.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
