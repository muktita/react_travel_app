import React from "react";
import ImgCarousel from "./components/carousel/imgCarousel";
import Destinations from "./components/destinations/Destinations";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Select from "./components/select/select";
import SelectsImg from "./components/selectImg/selectImg";





function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Select/>
      <SelectsImg/>
      <ImgCarousel/>
    
    </div>
  );
}

export default App;
