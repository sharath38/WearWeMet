import React from 'react'
import CustomButton from '../custom-button/Custom-button'

import { connect } from 'react-redux'

import CartItem from '../cart-item/Cart-Item'
import './Card-DropDown.scss'

const CardDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToprops = ({ cart: { cartItems } }) => ({
    cartItems,
})

export default connect(mapStateToprops)(CardDropDown)
