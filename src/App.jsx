import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";

import Home from "./pages/Home.jsx";
import Partner from "./pages/Partner.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
