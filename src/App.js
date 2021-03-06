import React from 'react'
import './App.css'

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { CurrentUserSelector } from './redux/user/User.selector'

import { HomePage } from './pages/Homepage/Homepage.component'
import ShopPage from './pages/shop/Shop-page'
import Header from './header/Header'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import CheckOutPage from './pages/checkOut/CheckOut'

import { auth, createUserProfilDocument } from './firebase/Firebase.util'
import { setCurrentUser } from './redux/user/User.action'

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfilDocument(userAuth)
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    })
                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckOutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: CurrentUserSelector,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
