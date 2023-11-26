import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const Intro = () => {
  useEffect(() => {
    const img = document.querySelector('.img-fluid');
    img.classList.add('animate__animated', 'animate__zoomIn');

    return () => {
      // Optional cleanup - remove the animation class when component unmounts
      img.classList.remove('animate__animated', 'animate__zoomIn');
    };
  }, []);

  return (
    <div className="Intro">
      <Container >
        <Row>
          <Col >
            <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
            {/* Explanation on the right side */}
            <div>
              <br></br>
              <h1><b>HELLO! <span className="myName" >I'M AMIN</span></b></h1>
              <h6><b>A SELF TAUGHT DEVELOPER. CURRENTLY, I'M FOCUSED ON THE BACKEND.</b></h6>
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