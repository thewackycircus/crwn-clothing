// library imports
import React from 'react';

// component imports
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// firebase imports
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

// styles imports
import './sign-up.styles.scss';

// SignUp is a class rather than a function because it need to use this.state
// It uses this.state to store user inputted data
class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    // This fuction will be called when the submit button is pressed on the form
    handleSubmit = async event => {
        event.preventDefault();

        // sets the values to the current state
        const {displayName, email, password, confirmPassword} = this.state;

        // if password and confirm password do not match, notify the user and return
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }


        try {
            // cretaes new user with email and password from the above const
            const {user} = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            // creates a new user profile with user and display name
            await createUserProfileDocument(user, {displayName});

            // sets all the fields to empty strings
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    };

    // This fuction will be called when ever something is typed is any of the input fields
    handleChange = event => {
        // const stores the name of the field and it's value
        const {name, value} = event.target;

        // finds variable in state which shares the same name and sets it's value to the value of the text field
        this.setState({[name]: value});
    }

    render() {
        // destructoring the state so it can be used easily
        const {displayName, email, password, confirmPassword} = this.state;
        // this block of code creates the form. onChange calls the above handleChange function and custom button calls
        // the above handleSuybmit function
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label = 'Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
