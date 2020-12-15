import React from "react";
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactPageScroller from 'react-page-scroller';
import Container from 'react-bootstrap/Container'
function Start() {
  return (
    <div>
      <Image
        className="d-block w-100 h-100"
        src="plant.jpg  "
        title="Welcome">
      </Image>
      {/* <h1 style={{color:'silver'}}>I'm Aneta</h1>
      <h5 style={{color:'silver'}}>And I Believe That - When you know better, you do better!</h5> */}
      <Accordion defaultActiveKey="1" >
        <Card style={{ backgroundColor: 'white', borderTopColor: 'white', borderBottomColor: 'white' }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="0">
              Learn More
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ backgroundColor: 'white' }}>
              <Card className="d-block w-100 h-100" style={{ borderBlockColor: 'white' }}>
                <Card.Body>
                  <Card.Title>I'm Aneta</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">And I Believe That - When you know better, you do better!</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link >Read More</Card.Link>
                  <Card.Link >Hire Me</Card.Link>
                </Card.Body>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>

  );
}

export default Start;
