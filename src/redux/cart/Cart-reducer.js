import CartType from './Cart-type'

const INITIAL_VALUE = {
    hidden: true,
}

const CartReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        default:
            return state
    }
}

export default CartReducer
