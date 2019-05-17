import React from "react";
import Login from "./component/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Homepage, Signup } from "./containers";
import { isLoggedIn } from "./utils";
import "./App.css";
import MainComponent from "./MainComponent"
import ShowProducts from "./Products/ShowProducts"
import AddProducts from "./AddProducts"
import ForgotPassword from "./ForgotPassword"
//import CheckMail from "./"
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ?
        <React.Fragment>
          <MainComponent {...props}>
            <Component {...props} />
          </MainComponent>
        </React.Fragment> : <Redirect to="/login" />
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Homepage} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/showproducts" component={ShowProducts} />
          <PrivateRoute path="/addproducts" component={AddProducts} />
          <PublicRoute path="/forgotpassword" component={ForgotPassword} />

        </Switch>
      </Router>
    );
  }
}

export default App;
