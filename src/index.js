import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store, persistor } from './redux/Store'
import App from './App'

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
