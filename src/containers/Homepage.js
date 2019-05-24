import React, { Component } from "react";
import { getObject } from "../utils";

export default class extends Component {



  render() {

    return (
      <div style={{ marginTop: 60, textAlign: "center" }} >

        <h1> Welcome, {getObject("user").name} </h1>

      </div>
    )

  }
}
