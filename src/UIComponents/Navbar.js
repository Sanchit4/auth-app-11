import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { removeObject } from "../utils"


class Navv extends Component {

    logout = () => {
        removeObject("user");
        this.props.history.push("/login");
    };

    render() {


        return (

            <Navbar style={{ position: "fixed", width: "102%",zIndex:"100" }} bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button onClick={this.logout} varient="primary">LOGOUT</Button>

            </Navbar>

        )
    }




}
export default Navv