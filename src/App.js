import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing projects={data.projects} contact={data.contact} />
      <Footer contact={data.contact} />
    </div>
  );
}

export default App;
