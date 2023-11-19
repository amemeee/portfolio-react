import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

const Project = () => {
  const [key, setKey] = useState('home');

  return (
    <Container className="container-space mt-5">
      <h1 className="text-center"><b>MY PROJECT</b></h1>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="tabs" className="justify-content-center" id="myTab" role="tablist">
          <Nav.Item>
            <Nav.Link eventKey="home"><b>Home</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile"><b>Arts</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact"><b>Contact</b></Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <Container className="mt-5">
              <Row className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <Col>
                  <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://media.tenor.com/UQESusJVIRwAAAAd/aizen-aizen-form.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
              </Row>
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="profile">
            <Container className="mt-5">
              <Row className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
              </Row>
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="contact">
            <Container className="mt-5">
              <Row className="row row-cols-1 row-cols-md-3 g-10 justify-content-center">
                <Col>
                  <img src="https://i.pinimg.com/originals/dd/70/57/dd70574cd73b633a43ae43e6ca7a560f.gif" alt="Big Image" className="img-fluid rounded" />
                </Col>
              </Row>
            </Container>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Project;
