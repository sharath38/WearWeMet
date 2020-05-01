import { createSelector } from 'reselect'

const seletorCart = (state) => state.cart

export const seletorCartItem = createSelector(
    [seletorCart],
    (cart) => cart.cartItems
)

export const selectorCartToggle = createSelector(
    [seletorCart],
    (cart) => cart.hidden
)

export const selectorCartItemCount = createSelector(
    [seletorCartItem],
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
)

export const selectorCartTotal = createSelector(
    [seletorCartItem],
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
)
