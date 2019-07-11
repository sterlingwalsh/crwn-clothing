import React from 'react';

import {connect} from 'react-redux';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button">&#10005;</span>
    </div>
)

const mapDispatchToProps = dispatch => {

}

export default connect(null, mapDispatchToProps)(CheckoutItem);