import React, { Component } from 'react';
//import{Navbar,  Brand, Link, Item, } from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Nav, Form, NavItem, FormControl } from 'react-bootstrap'
import Welcome from './Welcome';
import About from './About'
import Journey from './Journey'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="#welcome" to="/">AS</Navbar.Brand>
                    <Nav className="navbar-nav mr-auto">
                        {/* <NavItem eventkey={1} href="/"> */}
                        <Nav.Link href="#welcome" to="/"> Home</Nav.Link>
                        <Nav.Link href="#about" to="/about"> About</Nav.Link>
                        <Nav.Link href="#journey" to="/journey"> Journey</Nav.Link>
                        {/* </NavItem> */}
                    </Nav>
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/about' component={About} />
                        <Route path='/journey' component={Journey} />
                    </Switch>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>

                </Navbar>
            </div>
        )
    }
}