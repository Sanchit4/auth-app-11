import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Button } from "react-bootstrap"
import actions from './actions';
import { toast } from 'react-toastify';
import { connect } from "react-redux"

class AddProducts extends Component {


    constructor(props) {

        super(props);

        this.state = {

            product: {

                name: "",
                price: "",
                description: ""
            }
        }
    }

    _onChange = (key) => ({ target: { value, name } }) => {

        let data = { ...this.state[key] }
        data[name] = value;
        this.setState({ [key]: data })
    }



    onProduct = (e) => {

        e.preventDefault()
        const { product } = this.state
        this.setState({
            loading: true
        })
        console.log(this.state.product, "Outside the API")
        actions.addProduct(product).then(res => {

            console.log(res, "In the API")
            this.setState({
                loading: false
            })

            toast.success("Product Added")
        })

            .catch(err => {
                this.setState({
                    loading: false

                })
                console.log("failed to add product")
            })
    }







    render() {
        const { product } = this.state

        return (


            <Container className="addproducts">

                <Col className="addproducts-1" xs={12} sm={4} md={{ span: 4, offset: 3 }}> <h3 style={{ textAlign: "center", marginBottom: 15 }}> Add Products</h3>
                    <Col>
                        <Form onSubmit={this.onProduct}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter product Name"
                                    name="name"
                                    value={product.name}
                                    onChange={this._onChange("product")}
                                    style={{ marginBottom: 30 }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Product Price"
                                    name="price"
                                    value={product.price}
                                    onChange={this._onChange("product")}
                                    style={{ marginBottom: 30 }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    className="controlinput"
                                    size="lg"
                                    type="text"
                                    placeholder="Enter Product Discription"
                                    name="description"
                                    value={product.description}
                                    onChange={this._onChange("product")}
                                    style={{ marginBottom: 30 }}
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                className="btnsignin"
                                variant="primary"
                                size="lg"
                                block
                                onClick={this.onProduct}
                                style={{ marginTop: 20, backgroundColor: "#3a4350" }}
                            >Add Product
                            </Button>
                        </Form>
                    </Col>
                </Col>
            </Container >



        )

    }

}

export default connect(state => state)(AddProducts)