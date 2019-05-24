import React, { Component } from 'react';
import { getObject } from "./utils"

class About extends Component {



    render() {

        return (
            <div className="about-user">

                <p>FirstName:<span> {getObject("user").firstName} </span> </p>
                <p>LastName: {getObject("user").lastName}</p>
                <p>Email: {getObject("user").email} </p>
                <p>PhoneNumber: {getObject("user").phone}</p>
                <p>Address: {getObject("user").address.address}&nbsp;{getObject("user").address.city}&nbsp;{getObject("user").address.state}&nbsp;{getObject("user").address.country}</p>
                <p>ZipCode: {getObject("user").address.zipCode}</p>

            </div>
        )
    }

}

export default About 