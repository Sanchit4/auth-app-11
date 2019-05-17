import React, { Component } from "react"
import actions from "../actions"
import { connect } from "react-redux"
import { Row, Col } from "react-bootstrap"
import ProductCard from "../ProductCard"
import Loader from "../Loading"
class ShowProducts extends Component {
    state = {

        values: []
    }

    componentDidMount() {
        this.getProducts().then(res => {
            const { values } = res;
            if (values && values.length) {
                this.selectProduct(values[0].id);
            }
        })
    }

    getProducts = () => {
        return actions.getProducts();
    }

    selectProduct = (productId) => {
        return actions.getProduct(productId);
    }


    render() {
        console.log(this.props, 'props');
        console.log(actions, 'actions');
        const { products = [], product = {} } = this.props && this.props.products || {};

        return (
            <Row style={{ marginTop: "65px" }}>
                <Col style={{
                    display: "contents"
                }} xs={12} sm={6} m={6} className="list-wrapper">
                    {products && products.length ? products.map(item => {
                        return <ProductCard imageurl={item.asset.url} name={item.name} price={item.price} />
                    }) : <div style={{ alignItems: "center", textAlign: "center" }}> <Loader /></div>}
                </Col>
            </Row>
        );
    }
}

export default connect(state => state)(ShowProducts);