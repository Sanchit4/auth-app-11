import React, { Component } from "react"
import actions from "../actions"
import { connect } from "react-redux"
import { Row, Col, Modal, Button, ButtonToolbar, ModalDialog } from "react-bootstrap"
import ProductCard from "../ProductCard"
import Loader from "../Loading2"
import { deleteProductAPI } from "../apis/products";
import { toast } from "react-toastify";
class ShowProducts extends Component {
    state = {

        values: [],
        modal: false,
        modal2: false,
        isloading: false,
    }

    componentDidMount() {
        this.getProducts().then(res => {
            const { values } = res;
        })
    }


    openModal = () => {
        console.log("modal Changed")
        this.setState({
            modal: !this.state.modal
        })
    }

    openModal2 = () => {
        console.log("modal2 Changed")
        this.setState({
            modal2: !this.state.modal2
        })
    }

    getProducts = () => {
        return actions.getProducts();
    }

    selectProduct = (productId) => {
        this.setState({
            isloading: true
        })

        return actions.getProduct(productId).then(() => {
            this.openModal();
            this.setState({ isloading: false })
        }

        ).catch(err => {
            this.setState({
                isloading: false
            })
            toast.error(err.response.data.message || "Something Went Wrong")
        });
    }


    deleteProduct = (productId) => {

        deleteProductAPI(productId).then(() => {
            this.getProducts()
            this.openModal2()
            this.openModal()
            console.log("Get to the deleteAPI")
            toast.success("Products Deleted");

        }).catch((err) => {
            toast.error("Something Went Wrong!!!");
            console.log(err.response.data.message);
        })
    }

    render() {
        console.log(this.props, 'props');
        console.log(actions, 'actions');
        const { products = [], product = {} } = this.props && this.props.products || {};
        console.log(product, "Product Details")
        return (
            <div>
                <Row style={{ marginTop: "65px" }}>
                    <Col style={{
                        display: "contents"
                    }} xs={12} sm={6} m={6} className="list-wrapper">
                        {products && products.length ? products.map(item => {
                            return <ProductCard imageurl={item.asset.url} name={item.name} price={item.price} description={item.description} modal={() => this.selectProduct(item.id)} />
                        }) : <div style={{ alignItems: "center", textAlign: "center" }}> <Loader /></div>}
                    </Col>
                </Row>
                <div>

                    {this.state.isloading ? <div className="lds-ellipsis">< Loader /></div> :
                        <Modal show={this.state.modal} onHide={this.openModal}>
                            <Modal.Header onHide={() => this.openModal} closeButton>
                                <Modal.Title>Products Info</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <img src={product.asset && product.asset.url} alt="Image" />
                                <p> Name: {product.name}</p>
                                <p>Price: Rs.{product.price}</p>
                                <p>Description: {product.description} </p>

                                <ButtonToolbar>
                                    <Button variant="success" style={{ marginLeft: 335 }} onClick={this.openModal} >No</Button>
                                    <  Button variant="danger" style={{ marginLeft: 12 }} onClick={this.openModal2}>Delete</Button>
                                </ButtonToolbar>

                            </Modal.Body>
                        </Modal>}
                </div>

                <div>

                    <Modal show={this.state.modal2} onHide={this.modal2}>
                        <Modal.Dialog>

                            <Modal.Footer>
                                <Button variant="danger" onClick={() => this.deleteProduct(product.id)}>Yes</Button>
                                <Button variant="success" onClick={() => this.openModal2()}>No</Button>
                            </Modal.Footer>

                        </Modal.Dialog>
                    </Modal>

                </div>

            </div >

        );
    }
}

export default connect(state => state)(ShowProducts);