import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Terms from "./Components/Pages/Terms";
import Policy from "./Components/Pages/Policy";
import Faq from "./Components/Pages/Faq";
import Guide from "./Components/Pages/Guide";
import Contact from "./Components/Pages/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
