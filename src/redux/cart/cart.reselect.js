import { createSelector } from 'reselect'

const seletorCart = (state) => state.cart

export const seletorCartItem = createSelector(
    [seletorCart],
    (cart) => cart.cartItems
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
