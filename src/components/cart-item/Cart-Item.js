import React from 'react'
import './Cart-Item.scss'

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x &#36;{price}
            </span>
        </div>
    </div>
)

export default CartItem
