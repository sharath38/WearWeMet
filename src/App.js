import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/Homepage/Homepage.component'
import ShopPage from './pages/shop/Shop-page'
import Header from './header/Header'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import { auth, createUserProfilDocument } from './firebase/Firebase.util'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfilDocument(userAuth)
                userRef.onSnapshot((snapShot) => {
                    this.setState(
                        {
                            currentUser: {
                                id: snapShot.id,
                                ...snapShot.data(),
                            },
                        },
                        () => {
                            console.log(this.state)
                        }
                    )
                })
            } else {
                this.setState({
                    currentUser: userAuth,
                })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUp} />
                </Switch>
            </div>
        )
    }
}

export default App
