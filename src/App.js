import React from "react";
import Destinations from "./components/destinations/Destinations";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
    </div>
  );
}

export default App;
