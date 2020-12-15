import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink, Link
} from "react-router-dom";
import About from './About'
import Journey from './Journey'
import Start from './Start'
import { Nav, Form, FormControl, Container } from 'react-bootstrap'


function HeaderComponent() {
    var FontAwesome = require('react-fontawesome');

    return (
        <div>
            <Router>
                <Navbar bg="light" variant="light" >
                    <Navbar.Brand as={Link} to='/'>PORTFOLIO</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/welcome'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about' >About</Nav.Link>
                        <Nav.Link as={Link} to="/journey">Journey</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <FontAwesome className='super-crazy-colors' name='search' type="button" />
                        {/* <Button variant="outline-info">Search</Button> */}
                    </Form>
                </Navbar>
                <Switch>
                    <Route exact path="/"><Start /></Route>
                    <Route path="/welcome"><Start /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/journey"><Journey /></Route>
                </Switch>
            </Router>
            
        </div>
    );
}

export default HeaderComponent;
