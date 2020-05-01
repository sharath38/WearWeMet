import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { CurrentUserSelector } from '../redux/user/User.selector'
import { selectorCartToggle } from '../redux/cart/cart.reselect'

import { ReactComponent as Logo } from '../asset/crown.svg'
import CartIcon from '../components/cart-icon/Cart-icon'
import CardDropDown from '../components/card-dropdown/Card-DropDown'

import './Header.scss'
import { auth } from '../firebase/Firebase.util'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="Logo-contanier" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className="option" to="/signin">
                    {' '}
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CardDropDown />}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: CurrentUserSelector,
    hidden: selectorCartToggle,
})

export default connect(mapStateToProps)(Header)
