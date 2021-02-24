// library imports
import React from 'react';

// firebase imports
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

// component imports
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// styles imports
import './sign-in.styles.scss';

// SignIn is a class rather than a function because it need to use this.state
// It uses this.state to store user inputted data
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        // this.state is where the user inputted data will be stored
        this.state = {
            email: '',
            password: ''
        }
    }

    // This fuction will be called when the submit button is pressed on the form
    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

        // sets each field to an empty string
        this.setState({email:'', password:''});
    }

    // This fuction will be called when ever something is typed is either of the input fields
    handleChange = event => {
        // This line takes the name and value from the target. 
        // For example, name='email' and this.state.email on the first input tag.
        const {value, name} = event.target;

        // This line sets state.[name] to the value
        this.setState({[name]: value})
    }

    render() {
        return(
            // this block of code creates the form
            // the initial value is set to a value stored in state
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password' 
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick ={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;