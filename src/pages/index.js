<<<<<<< HEAD
import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import SignUp from '../components/Modal/Signup/SignUp'
import SignIn from '../components/Modal/Signin/SignIn'
const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
         
        </div>
    )
}
=======
import React from "react";
import SignUp from "../components/Modal/Signup/SignUp";
import SignIn from "../components/Modal/Signin/SignIn";
const Home = () => {
  return (
    <div>
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};
>>>>>>> e8c55245be2dcf8420f0e1d0122fce44ea2f793a

export default Home;
