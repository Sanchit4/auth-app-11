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

            <Navbar style={{ position: "fixed", width: "102%", zIndex: "100" }} bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navigation</Navbar.Brand>

                <Button style={{ marginLeft:1120 }} onClick={this.logout} varient="primary">LOGOUT</Button>

            </Navbar>

        )
    }




}
export default Navv