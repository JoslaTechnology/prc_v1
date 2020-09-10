import React from 'react';

// components
import NavBar from './NavBar';
import Adlib from './Adlib';
import About from './About';
import Service from './Service';
import Team from './Team';
import Client from './Client';
import Footer from './Footer';


// styles
import '../styles/App.css';

function App() {
  return (
    <div className='App-container'>
      <div className="rectangle">
        <NavBar />
        <Adlib />
      </div>
      <About />
      <Service />
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Team />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Client />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
