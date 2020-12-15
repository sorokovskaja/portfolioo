import React, { Component, View } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Nav } from 'react-bootstrap'

function Footer() {
    var FontAwesome = require('react-fontawesome');
    return (
        <div className="fixed-bottom">
            <Navbar color="white" variant="light" >
                <Container>
                <Navbar.Brand style={{ fontSize: 'small' }}>
                        <FontAwesome className='super-crazy-colors' name='copyright' /> Portfolioo
                         </Navbar.Brand>
                    <Nav className="align-content-end">
                        <Nav.Link target="_blank" href="https://www.linkedin.com/in/anetaso/">
                            <FontAwesome className='super-crazy-colors' name='linkedin' type="button" />
                        </Nav.Link>
                        <Nav.Link target="_blank" href="https://github.com/sorokovskaja">
                            <FontAwesome className='super-crazy-colors' name='github' type="button" link="https://github.com/sorokovskaja" />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;