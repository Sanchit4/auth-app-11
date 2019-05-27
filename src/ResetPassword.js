import React, { Component } from 'react';
import { getPasswordAPI } from './apis/resetPassword'
import actions from './actions';
import { toast } from 'react-toastify';
import { Container, Col, Form, Button } from "react-bootstrap"



toast.configure()

class ResetPassword extends Component {

    state = {

        pass: {

            password: "",
            confirmPassword: ""
        }
    }


    _onChange = (key) => ({ target: { value, name } }) => {

        let data = { ...this.state[key] };
        data[name] = value;
        this.setState({ [key]: data })
    }

    valid() {
        const { password, confirmPassword } = this.state.pass
        if (password === confirmPassword) {
            return true;
        }
        return false
    }

    notify = () => {
        toast.warn("Check Password Please!!")
    }

    resetPassword = () => {
        console.log("Reset password are", actions);
        actions.resetPassword({ token: this.props.match && this.props.match.params && this.props.match.params.token || "", password: this.state.pass.password || '' }).then(res => {
            console.log("Res are", res);
            toast.success("Password Changed Redirecting to Login Page")
            setTimeout(() => {
                this.props.history.push("/login")
            }, 5000)
        })
        return true;
    }

    resetPassBtn = (e) => {
        e.preventDefault()
        if (this.valid()) {
            this.resetPassword();
        }
        else {
            this.notify()
        }
    }

    render() {

        return (

            <Container fluid>
                <Col className="loginpage" xs={12} sm={4} md={{ span: 4, offset: 4 }} >
                    <Col>
                        <h2 style={{ textAlign: "center" }}>Reset Password</h2>
                        <Form onSubmit={this.login}>
                            <Form.Group controlId="formGroupEmail" style={{ marginTop: 45, marginBottom: 30 }}>
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={this.state.pass.password}
                                    onChange={this._onChange("pass")} />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={this.state.pass.confirmPassword}
                                    onChange={this._onChange("pass")} />
                            </Form.Group>

                            <Button
                                type="submit"
                                style={{ margin: "30px 0px 140px 0px", backgroundColor: "#212529", borderColor: "white" }}
                                variant="primary"
                                size="lg"
                                block
                                onClick={this.resetPassBtn}
                            >Procced
                    </Button>
                        </Form>
                    </Col>
                </Col>
            </Container >


        )
    }


}


export default ResetPassword