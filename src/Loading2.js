import React, { Component } from "react";
class Loader extends Component {
    render() {
        return (
            <div class="lds-ellipsis2">
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
}
export default Loader;
