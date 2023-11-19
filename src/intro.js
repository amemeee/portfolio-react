import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="Intro">
      <Container className="mt-5">
        <Row>
          <Col md={7}>
            {/* Big size image on the left */}
            <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
          </Col>
          <Col md={5}>
            {/* Explanation on the right side */}
            <div>
              <h1><b>HELLO!</b></h1>
              <h6><b>I'M A SELF TAUGHT DEVELOPER. CURRENTLY, I'M FOCUSED ON THE BACKEND.</b></h6>
              <p>
              Keep coding, keep exploring, and keep pushing the boundaries of what's possible in the backend realm.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
