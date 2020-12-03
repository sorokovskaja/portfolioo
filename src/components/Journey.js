import React, { Component, View } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
//import{Navbar,  Brand, Link, Item, } from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'

import HeaderComponent from './HeaderComponent'

export default class Journey extends Component {
    render() {

        return (
            //<HeaderComponent  />
            //<div className="Journey">
                <HeaderComponent />
            //     <Form>
            //         <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
            //             <Form.Label>Select with three visible options</Form.Label>
            //             <Form.Control as="select" htmlSize={3} custom>
            //                 <option>1</option>
            //                 <option>2</option>
            //                 <option>3</option>
            //                 <option>4</option>
            //                 <option>5</option>
            //             </Form.Control>
            //         </Form.Group>
            //     </Form>
            // </div>
            // <View>
            //  <HeaderComponent  /> 
            //         Hell
            // </View>
        )
    }
}