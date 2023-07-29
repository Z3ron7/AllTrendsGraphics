import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Resources />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
