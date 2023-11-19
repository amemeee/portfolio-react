import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import necessary icons

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <p className="text-center"><b>Muhammad Amin</b><br />[Backend Developer]</p>
        <div className="d-flex justify-content-center">
          <FaEnvelope style={{ margin: '0px 5px 0px 5px' }} />
          <FaLinkedin style={{ margin: '0px 5px 0px 5px' }} />
          <FaGithub style={{ margin: '0px 5px 0px 5px' }} />
        </div>
        <br />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Copyright Amemeee.
          All Rights Reserved
        </p>
        <br />
      </Container>
    </footer>
  );
};

export default Footer;