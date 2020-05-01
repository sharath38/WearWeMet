import React from 'react'
import CustomButton from '../custom-button/Custom-button'

import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

import { seletorCartItem } from '../../redux/cart/cart.reselect'
import setCartAction from '../../redux/cart/Cart-Action'

import CartItem from '../cart-item/Cart-Item'
import './Card-DropDown.scss'

const CardDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className="empty-message">Your cart is empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkOut')
                dispatch(setCartAction())
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: seletorCartItem,
})

export default withRouter(connect(mapStateToProps)(CardDropDown))
