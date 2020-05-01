import CartType from './Cart-type'
const setCartAction = () => ({
    type: CartType.TOGGLE_CART_HIDDEN,
})
export default setCartAction

export const addItem = (item) => ({
    type: CartType.ADD_ITEM,
    payload: item,
})

export const RemoveItem = (item) => ({
    type: CartType.REMOVE_ITEM,
    payload: item,
})

export const clearItemFromCart = (item) => ({
    type: CartType.CLEAR_ITEM_FROM_CART,
    payload: item,
})
