import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/Tailwind.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter basename={"/coopera-Frontend/"}>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
);
