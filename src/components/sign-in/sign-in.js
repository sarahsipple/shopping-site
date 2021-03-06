import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


import { auth, signInWithGoogle } from '../../firebase/firebase';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password: '' })
        } catch(error) {
            console.log(error)
        }

    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In With Your Email And Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="EMAIL"
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="PASSWORD"
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}Sign In with Google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;