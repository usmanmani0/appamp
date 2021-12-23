import React from "react";

import Home from "./pages";
import SoundCloudPage from "./pages/SoundCloudPage";
import "./App.css";
import AppPage from "./components/AppPage";


function App() {
  return (
    <>
       {/* <Home />   */}
    
     <SoundCloudPage /> 
      <Home />
      {/* <AppPage /> */}

      { /*<SoundCloudPage /> */}
    </>
  );
}

export default App;
