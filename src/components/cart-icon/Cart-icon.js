import React from 'react'

import { connect } from 'react-redux'
import setCartAction from '../../redux/cart/Cart-Action'

import { ReactComponent as ShoppingIcon } from '../../asset/cart-icon.svg'
import './Cart-Icon.scss'

const CartIcon = ({ setCartAction }) => (
    <div className="cart-icon" onClick={setCartAction}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    setCartAction: () => dispatch(setCartAction()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
