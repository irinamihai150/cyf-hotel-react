import React from "react";
import Heading from "./Heading";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
