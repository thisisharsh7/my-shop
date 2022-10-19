import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Terms from "./Components/Pages/Terms";
import Policy from "./Components/Pages/Policy";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
