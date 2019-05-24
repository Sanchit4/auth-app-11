import React, { Component } from 'react';
import { Container, Col, Form, Button } from "react-bootstrap";


class CheckMail extends Component {

    render() {

        return (
            <Container fluid >

                <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }} >

                    <Col>
                        <h4>Please Check Your Mail</h4>
                        <Button
                            type="submit"
                            style={{ margin: "30px 0px 170px 0px" }}
                            className="btnsignin"
                            variant="primary"
                            size="lg"
                            block
                            onClick={() => this.props.history.push("/login")}
                        >Go
            </Button>



                    </Col>

                </Col>

            </Container>
        )
    }
}

export default CheckMail