// import { StrictMode } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode> 
// );
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {HashRouter} from "react-router-dom"

ReactDOM.render(
  <HashRouter basename="/Assignment">
    <App />
  </HashRouter>,
  document.getElementById('root')
);
