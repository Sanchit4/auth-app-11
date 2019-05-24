import React, { Component } from 'react';
import { Button } from "react-bootstrap"
import { getObject } from "./utils"


class AccountSettings extends Component {

    state = {

        user: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""

        },

        address: {
            address: "",
            zipcode: "",
            state: "",
            country: "",
            city: ""
        },

        btnShow: false
    }


    btntoggle = () => {

        this.setState({
            btnShow: !this.state.btnShow
        })
    }



    render() {

        let buttn = <i class="far fa-edit" > </i>
        if (this.state.btnShow === true) {
            buttn = <i class="fas fa-edit" > </i>
        }

        const { btnShow } = this.state

        return (
            <div className="aboutuser">
                <button style={{ float: "right" }} onClick={this.btntoggle}>{buttn}</button>

                <p>FirstName: &nbsp;{btnShow ? <input type="text" placeholder={getObject("user").firstName} id="firstName" /> : <span> {getObject("user").firstName} </span>}</p>


                <p>LastName:&nbsp;{btnShow ? <input type="text" placeholder={getObject("user").lastName} id="lastName" /> : <span> {getObject("user").lastName}</span>}</p>

                <p>Email:&nbsp; {btnShow ? <input type="text" placeholder={getObject("user").email} id="Email" /> : <span>{getObject("user").email} </span>}</p>

                <p>Phone Number:&nbsp; {btnShow ? <input type="text" placeholder={getObject("user").phone} id="Phone" /> : <span> {getObject("user").phone}</span>}</p>

                <p>Address: {btnShow ? <input type="text" placeholder={getObject("user").address.address} id="address" /> : <span> {getObject("user").address.address} {getObject("user").address.state} {getObject("user").address.country}  {getObject("user").address.city}</span>}</p>

                <p>ZipCode:&nbsp;{btnShow ? <input type="text" placeholder={getObject("user").zipCode} id="ZipCode" /> : <span>
                    {getObject("user").zipCode}
                </span>}
                </p>

                {btnShow ? <Button centered variant="success">Save Changes</Button> : null}
            </div>
        )
    }

}


export default AccountSettings