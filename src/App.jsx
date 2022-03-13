import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Demonstration from "./pages/demonstration";
import ContactInfo from "./pages/contact_info";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact_info" element={<ContactInfo />} />
        <Route path="/demonstration" element={<Demonstration />} />
      </Routes>
    </Router>
  );
}
