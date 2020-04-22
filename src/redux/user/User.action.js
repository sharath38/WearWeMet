import UserActionType from './User.type'

export const setCurrentUser = (user) => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user,
})
