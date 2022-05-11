import React from "react";
import Destinations from "./components/destinations/Destinations";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Select from "./components/select/select";
import SelectImg from "./components/selectImg/selectImg";




function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Select/>
      <SelectImg/>
    
    </div>
  );
}

export default App;
