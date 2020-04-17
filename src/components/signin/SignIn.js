import React, { Component } from 'react'
import FormInput from '../form-input/Form-Input'
import CustomButton from '../custom-button/Custom-button'
import './SignIn.scss'
import { SignInWithGoogle } from '../../firebase/Firebase.util'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        this.setState({ email: '', passsword: '' })

        e.preventDefault()
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
        e.preventDefault()
    }

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>sign in with an alternate account</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="button">
                        <CustomButton type="button" value="submit">
                            sign in
                        </CustomButton>
                        <CustomButton
                            type="button"
                            onClick={SignInWithGoogle}
                            isGoogleSignIn
                        >
                            sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
