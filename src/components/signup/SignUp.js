import React, { Component } from 'react'
import FormInput from '../form-input/Form-Input'
import { auth, createUserProfilDocument } from '../../firebase/Firebase.util'
import CustomButton from '../custom-button/Custom-button'
import './SignUp.scss'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfilDocument(email, displayName)

            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                },
                () => console.log(displayName)
            )
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h1 className="title">I do not have a account</h1>
                <span>Please signup with email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="displayName"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="confirm Password"
                        required
                    />
                    <CustomButton type="submit"> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
