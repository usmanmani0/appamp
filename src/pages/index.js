import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Filter from "../components/Filter/Filter";
import Appcard from "../components/Appcard/Appcard";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Filter />
      <Appcard />
      <Footer />
      {/*pull issue  */}
    </div>
  );
};

export default Home;
