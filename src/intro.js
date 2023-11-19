import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

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
      <Container className="mt-5">
        <Row>
          <Col md={7}>
            {/* Big size image on the left */}
            <img
              src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif"
              alt="Big Image"
              className={classNames('img-fluid', 'rounded')}
            />
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