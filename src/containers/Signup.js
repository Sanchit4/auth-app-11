import React, { Component } from "react";
import SignupForm from "../component/SignupForm";
import validator from "../validations/signup";
import * as auth from "../apis/auth";
import { saveObject } from "../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import actions from "../actions";
import { connect } from "react-redux";

toast.configure();

class Signup extends Component {
  state = {
    user: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    },
    errors: {},
    isValidated: false
  };

  onChange = ({ target: { value, name } }) => {
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

  onChangeAddress = () => {};

  isValid = user => {
    const { errors, isValid } = validator(user);
    this.setState({ errors });
    return isValid;
  };

  notify = () => toast("Your Account has been Created redirecting to login!!");

  redirectToLogin = () => {
    setTimeout(() => {
      this.props.history.push("/login");
    }, 5000);
  };

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.state;

    if (this.isValid(user)) {
      actions
        .onSignupPress(user)
        .then(res => {
          this.notify();
          this.redirectToLogin();
        })
        .catch(error => {});
    } else {
      this.setState({ isValidated: true });
    }
  };

  goto = path => {
    this.props.history.push(path);
  };

  render() {
    const { user, isValidated, errors, address } = this.state;

    return (
      <SignupForm
        user={user}
        errors={errors}
        address={address}
        isValidated={isValidated}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        goto={this.goto}
      />
    );
  }
}

export default connect(state => state)(Signup);
