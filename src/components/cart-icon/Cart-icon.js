import React from 'react'

import { connect } from 'react-redux'
import setCartAction from '../../redux/cart/Cart-Action'

import { createStructuredSelector } from 'reselect'
import { selectorCartItemCount } from '../../redux/cart/cart.reselect'

import { ReactComponent as ShoppingIcon } from '../../asset/cart-icon.svg'
import './Cart-Icon.scss'

const CartIcon = ({ setCartAction, itemCount }) => (
    <div className="cart-icon" onClick={setCartAction}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    setCartAction: () => dispatch(setCartAction()),
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectorCartItemCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
