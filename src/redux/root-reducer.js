import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './user/User-reducer'
import CartReducer from './cart/Cart-reducer'
import DirectoryReducer from './Directory/reducer.directory'
import shopReducer from '../redux/shop/Shop-reducer'

const PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: shopReducer,
})

export default persistReducer(PersistConfig, rootReducer)
