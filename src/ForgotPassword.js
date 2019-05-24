import React, { Component } from 'react';
import { Container, Col, Row, Form, Button, InputGroup, FormControl } from "react-bootstrap"
import { forgotPasswordAPI } from "./apis/auth"
import { toast } from 'react-toastify';


class ForgotPassword extends Component {

    state = {

        user: {
            email: ""
        }
    }

    _onChange = ({ target: { name = '', value = '' } }) => {
        this.setState({

            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    forgotpassword = (e) => {

        e.preventDefault()
        const { user } = this.state
        console.log(this.state, "Sended Request")
        forgotPasswordAPI(user)
            .then(() => {
                console.log(user, "In the API")
                toast.success("Here We go")
                this.props.history.push("/checkmail")

            })
            .catch(err => {
                console.log(err, "eror from Forgotpassword")
            })

    }

    render() {

        const { email } = this.state.user

        return (
            <Container fluid>
                <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }}>
                    <Col>
                        <h2 style={{ textAlign: "center" }}>Account Recovery</h2>
                        <Form onSubmit={this.forgotpassword}>
                            <InputGroup style={{ marginTop: 45 }} className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl style={{ height: 50 }}
                                    placeholder="Enter E-mail"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    name="email"
                                    value={email}
                                    onChange={this._onChange}
                                />
                            </InputGroup>

                            <Button
                                type="submit"
                                style={{ margin: "40px 0px 90px 0px" }}
                                className="forgot-button1"
                                variant="primary"
                                size="lg"
                                block
                                onClick={this.forgotpassword}
                            >GO
                </Button>
                        </Form>
                        <Row>
                            {   /*    <Col>
                                <Form.Group>
                                    <p style={{ margin: "10px 0px 0px 5px", cursor: "pointer", color: "#2a558c" }} onClick={() => this.props.history.push("/resetpassword")} >For Test</p>
                                </Form.Group>
                     </Col>  */ }
                            <Col>
                                <Form.Group>
                                    <button className="forgot-button" onClick={() => this.props.history.push("/login")} > Back To Login</button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>

                </Col>
            </Container>



        )
    }

}

export default ForgotPassword;