import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages";
import SoundCloudPage from "./pages/SoundCloudPage";
import "./App.css";
import AppPage from "./components/AppPage";
import MobileAddCollection from "./components/MobileAddCollection";
import MobileFilter from "./components/UiSecreenFilter/mobileFilter";
import SearchResultHeroSection from "./components/SearchResultPage/HeroSection";
import CollectionHeroSection from "./components/Collection/CollectionHeroSection";
import CollectionPage from "./components/Collection/CollectionPage";
import UploadScreen from "../../appamp/src/components/UploadScreens"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apppage" element={<AppPage />} />
        <Route path="/soundcloudpage/:id" element={<SoundCloudPage />} />
        <Route path="/searchpage" element={<SearchResultHeroSection />} />
        <Route path="/createcollection" element={<CollectionHeroSection />} />
        <Route path="/collectionpage" element={<CollectionPage />} />
      </Routes>
      {/* <UploadScreen /> */}
    </>
  );
}

export default App;
