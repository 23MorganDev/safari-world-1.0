import React from "react";
import { Element } from "react-scroll"; // ✅ needed for smooth scroll targets

import Homepage from "./Homepage/Homepage.jsx";
import AboutUs from "./About/About.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Tours from "./Tours/Tours.jsx";
import Contact from "./Contact/Contact.jsx";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <Element name="home">
        <Homepage />
      </Element>

      {/* About Section */}
      <Element name="about">
        <AboutUs />
      </Element>

      {/* Tours Section */}
      <Element name="tours">
        <Tours />
      </Element>

      {/* Gallery Section */}
      <Element name="gallery">
        <Gallery />
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
