import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Works from "./pages/Works";
import data  from "./data"

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
      <Header contact={data.contact}/>
     

      <Landing projects={data.projects} contact={data.contact}/>
      <Footer contact={data.contact}/>
    </div>
  );
}

export default App;
