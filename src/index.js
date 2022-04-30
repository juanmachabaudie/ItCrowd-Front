import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()

const root = createRoot(document.getElementById("root"));

axios.defaults.baseURL = process.env.REACT_APP_BACKEND || "http://localhost:5000/cars-api-7abc3/us-central1/app";

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,

);
