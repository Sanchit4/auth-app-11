import React from 'react';

const ProductCard = (props) => {

    return (

        <div className="show-product">
            <img src={props.imageurl} alt={props.image} />
            <h5>{props.name}</h5>
            <p>{props.price}</p>
        </div>
    )
}

export default ProductCard