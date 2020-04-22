import { combineReducers } from 'redux'
import UserReducer from './user/User-reducer'
import CartReducer from './cart/Cart-reducer'

export default combineReducers({
    user: UserReducer,
    cart: CartReducer,
})
