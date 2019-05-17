import React, { Component } from 'react';
import Navv from './UIComponents/Navbar';
import Side from './UIComponents/Sidebar';
import { Row, Col, Container } from 'react-bootstrap';


class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Container fluid>


                <Row>

                    <Col xs={12} sm={12} md={12} style={{ padding: 0 }}>
                        <Navv {...this.props} />
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <Row>
                            <Col xs={12} sm={2} md={2}>
                                <Side {...this.props} />
                            </Col>
                            <Col xs={12} sm={10} md={10}>
                                <div className="body-wrapper">
                                    {this.props.children}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>




            </Container>)
    }
}

export default MainComponent;