import React, { Component } from "react";
class Loader extends Component {
  render() {
    return (
      <div class="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
export default Loader;
