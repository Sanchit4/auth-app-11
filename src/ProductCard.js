import React from 'react';
import Laoder from "./Loading2"
const ProductCard = (props) => {

    return (

        <div className="show-product" onClick={props.modal} >
            <img src={props.imageurl} alt={props.image} />
            <h5>{props.name}</h5>
            <p>{props.price}</p>
            {props.isloading}

        </div>
    )
}

export default ProductCard