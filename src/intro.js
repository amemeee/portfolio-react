import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import seishin from './images/seishin.gif'; // Import the image
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
      <div className="me-card" >
        <Container >
          <Row>
            <Col >
              {/* Explanation on the right side */}
            
                <div >
                  <img src={seishin} alt="Big Image" className="img-fluid rounded" />
                  <div class="overlay-content">
                    <h1>Your Text</h1>
                    <button><a href='#' > Button</a></button>
                  </div>
                </div>
             
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;