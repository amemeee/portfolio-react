import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './navbar'; // Import your Navbar component
import Intro from './intro'; // Import your Navbar component
import Project from './project'; // Import your Navbar component
import Skill from './skills'; // Import your Navbar component
import Footer from './footer'; // Import your Navbar component

const App = () => {
  return (
    <div className="App">
      {/* Include the Navbar component */}
      <CustomNavbar />
      <Intro />
      
      <Footer />
      {/* Rest of your content */}
      
    </div>
  );
};

export default App;
