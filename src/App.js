import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages";
import SoundCloudPage from "./pages/SoundCloudPage";
import "./App.css";
import AppPage from "./components/AppPage";
import MobileAddCollection from "./components/MobileAddCollection";
import MobileFilter from "./components/UiSecreenFilter/mobileFilter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apppage" element={<AppPage />} />
        <Route path="/soundcloudpage" element={<SoundCloudPage />} />
      </Routes>
      {/* <MobileAddCollection /> */}
      {/* <MobileFilter /> */}
    </>
  );
}

export default App;
