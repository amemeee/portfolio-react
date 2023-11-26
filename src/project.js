import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import necessary icons
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Project = () => {
  const [key, setKey] = useState('home');

  return (
    <div className="Intro">
    <Container>
      <h1 className="text-center"><b>MY PROJECT</b></h1>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://cf.shopee.com.my/file/65a7b4701d6b3895201b8987987b89db" />
        <Card.Body>
          <Card.Title>E-card Wedding</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="https://amemeee.github.io/kad-kahwin/" target="_blank" ><FaGithub style={{ margin: '0px 5px 0px 5px' }} /></a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92GY7tJ51C_9evkVlzlquDt90GEoygRoxCfYVSHgAVkFYh0sPJos5IQSSpvKJqTsAfbA&usqp=CAU" />
        <Card.Body>
          <Card.Title>My Task</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="" target="_blank" ><FaGithub style={{ margin: '0px 5px 0px 5px' }} /></a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXm9iNTsTw8-rNvCJzSSiACbgyrTu5-kZhQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="" target="_blank" ><FaGithub style={{ margin: '0px 5px 0px 5px' }} /></a></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://cf.shopee.com.my/file/65a7b4701d6b3895201b8987987b89db" />
        <Card.Body>
          <Card.Title>E-card Wedding</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="" target="_blank" ><FaGithub style={{ margin: '0px 5px 0px 5px' }} /></a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92GY7tJ51C_9evkVlzlquDt90GEoygRoxCfYVSHgAVkFYh0sPJos5IQSSpvKJqTsAfbA&usqp=CAU" />
        <Card.Body>
          <Card.Title>My Task</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="" target="_blank" ><FaGithub style={{ margin: '0px 5px 0px 5px' }} /></a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXm9iNTsTw8-rNvCJzSSiACbgyrTu5-kZhQ&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="" target="_blank" ><FaGithub style={{ margin: '0px 5px 0px 5px' }} /></a></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
    </div>
  );
};

export default Project;
