import React from 'react'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signup/SignUp'
import './SignInAndSignUp.scss'

const SignInAndSignUp = () => {
    return (
        <div className="signIn-signUp">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp
