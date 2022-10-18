import React from "react";
import Comments from "./Components/Comments";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Product from "./Components/Product";
import Store from "./Components/Store";
import Suggestion from "./Components/Section/Suggestion";
import Why from "./Components/Why";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Store />
      <Why />
      <Comments />
      <Suggestion />
      <Footer />
    </>
  );
};

export default App;
