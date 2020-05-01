import CartType from './Cart-type'
import { AddItemToCart, RemoveItemFromCart } from './Cart-Utils'

const INITIAL_VALUE = {
    hidden: true,
    cartItems: [],
}

const CartReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartType.ADD_ITEM:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload),
            }
        case CartType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                ),
            }
        case CartType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: RemoveItemFromCart(state.cartItems, action.payload),
            }
        default:
            return state
    }
}

export default CartReducer
