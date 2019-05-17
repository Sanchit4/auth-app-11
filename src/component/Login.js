import React, { Component } from "react";
import * as auth from "../apis/auth";
import actions from "../actions";
import * as userAction from "../apis/getUser";
import validator from "../validations/Login";
import { saveObject, getObject } from "../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loading";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  FormControl,
  InputGroup
} from "react-bootstrap";
import ForgotPassword from "../ForgotPassword";

toast.configure();

class Login extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    errors: {},
    isValidated: false,
    loading: false
  };

  _onChange = ({ target: { name = "", value = "" } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },

      errors: {
        ...this.state.errors,
        [name]: ""
      }
    });
  };

  isValid = user => {
    const { errors, isValid } = validator(user);
    this.setState({ errors });
    return isValid;
  };

  notify = () => toast("Logged In Successfully ");

  login = e => {
    e.preventDefault();
    const { user } = this.state;
    this.setState({ loading: true });

    if (this.isValid(user)) {
      actions
        .onLoginPress(user)
        .then(() => {
          this.setState({ loading: false });
          this.props.history.push("/");
          this.notify();
        })
        .catch(() => {
          this.setState({ loading: false });
        })
    } else {
      this.setState({ isValidated: true, loading: false });
    }
  };

  render() {
    const { loading, user, errors, isValidated } = this.state;
    return (
      <Container>
        <Col
          className="LoginPage"
          xs={12}
          sm={3}
          md={{ span: 6, offset: 3 }}
          centered
        >
          <Col>
            <p className="align">
              Don't have an account? &nbsp; &nbsp;
              <button
                onClick={() => this.props.history.push("/signup")}
                className="button"
              >
                CREATE ACCOUNT
              </button>
            </p>
          </Col>
          <Col>
            <h1 className="formtext">Log into Account</h1>
            <p style={{ fontSize: "10px" }}>Enter your Login details below</p>
          </Col>
          <Col>
            <Form onSubmit={this.login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "10px" }}>
                  EMAIL ADDRESS
                </Form.Label>
                <InputGroup className="mb-3" style={{ width: "60%" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ background: "transparent" }}
                      id="basic-addon1"
                    >
                      <i className="fas fa-envelope" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className={errors && errors.email ? "error" : ""}
                    className="form-control"
                    name="email"
                    style={{ borderLeft: "transparent" }}
                    placeholder="Username"
                    aria-label="Username"
                    value={user.email}
                    aria-describedby="basic-addon1"
                    onChange={this._onChange}
                    isValidated={isValidated}
                  />
                  <hr />{" "}
                </InputGroup>
                {errors && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </Form.Group>
              <p
                style={{
                  color: "black",
                  fontSize: "9px",
                  paddingLeft: "215px",
                  cursor: "pointer"
                }}
              >
                <p on onClick={() => this.props.history.push("/forgotpassword")} >Forgot Password?> </p>
              </p>
              <Form.Group
                style={{ marginTop: "-22px" }}
                controlId="formBasicPassword"
              >
                <Form.Label style={{ fontSize: "10px" }}>PASSWORD</Form.Label>
                <InputGroup className="mb-3" style={{ width: "60%" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ background: "transparent" }}
                      id="basic-addon1"
                    >
                      <i className="fas fa-key" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    className={errors && errors.password ? "error" : ""}
                    className="form-control"
                    type="password"
                    style={{ borderLeft: "transparent" }}
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={this._onChange}
                    isValidated={isValidated}
                  />
                </InputGroup>
                {errors && errors.password && (
                  <p className="error">{errors.password}</p>
                )}
              </Form.Group>
              <Form.Group
                controlId="formBasicChecbox"
                style={{ fontSize: "10px" }}
              >
                <Form.Check
                  style={{ fontSize: "10px", paddingTop: "4px" }}
                  type="checkbox"
                  label="Remember Me!"
                />
              </Form.Group>
              {loading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                  <Button
                    style={{
                      marginTop: "15px",
                      backgroundColor: "#3a4350",
                      width: "25%",
                      fontSize: "12px",
                      border: "none"
                    }}
                    type="submit"
                    variant="primary"
                  >
                    SIGN IN
                </Button>
                )}
            </Form>
          </Col>
        </Col>
      </Container>
    );
  }
}

export default connect(state => state)(Login);
