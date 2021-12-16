import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Filter from "../components/Filter/Filter";
import Appcard from "../components/Appcard/Appcard";
import SignUp from "../components/Modal/Signup/SignUp";
import SignIn from "../components/Modal/Signin/SignIn";

const Home = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <Header />
      <Hero />
      <Filter />
      <Appcard />
    </div>
  );
};

export default Home;
