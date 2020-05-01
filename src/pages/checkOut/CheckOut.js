import React from 'react'
import './CheckOut.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
    seletorCartItem,
    selectorCartTotal,
} from '../../redux/cart/cart.reselect'

import CheckOutItem from '../../components/checkout-item/Check0ut-item'

const CheckOutPage = ({ CartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-block">
                <span>Product</span>
            </div>
            <div className="checkout-block">
                <span>Description</span>
            </div>
            <div className="checkout-block">
                <span>Quantity</span>
            </div>
            <div className="checkout-block">
                <span>Price</span>
            </div>
            <div className="checkout-block">
                <span>Remove</span>
            </div>
        </div>
        {CartItems.map((cartItem) => (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
            <span>Total: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    CartItems: seletorCartItem,
    total: selectorCartTotal,
})

export default connect(mapStateToProps)(CheckOutPage)
