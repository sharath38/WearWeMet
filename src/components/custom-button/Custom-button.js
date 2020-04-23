import React from 'react'
import './Custom-button.scss'

const CustomButton = ({
    children,
    isGoogleSignIn,
    Inverted,
    ...otherProps
}) => {
    return (
        <button
            className={`
            ${Inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton
