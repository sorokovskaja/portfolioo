import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink, Link
} from "react-router-dom";
import About from './About'
import Journey from './Journey'
import Welcome from './Welcome'
import { Nav, Form, NavItem, FormControl, Container } from 'react-bootstrap'


function HeaderComponent() {
    var FontAwesome = require('react-fontawesome');

    return (
        <Router>
            <Navbar bg="#999" variant="dark" >
                <Navbar.Brand as={Link} to='/'>AS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/welcome'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/about' >About</Nav.Link>
                    <Nav.Link as={NavLink} to="/journey">Journey</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <FontAwesome className='super-crazy-colors' name='search' type= "button"/>
                    {/* <Button variant="outline-info">Search</Button> */}
                </Form>
            </Navbar>
            <Switch>
                <Route exact path="/"><Welcome/></Route>
                <Route path="/welcome"><Welcome/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/journey"><Journey/></Route>
            </Switch>
        </Router>
    );
}

export default HeaderComponent;
