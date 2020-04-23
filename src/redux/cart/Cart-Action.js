import CartType from './Cart-type'
const setCartAction = () => ({
    type: CartType.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
    type: CartType.ADD_ITEM,
    payload: item,
})

export default setCartAction
