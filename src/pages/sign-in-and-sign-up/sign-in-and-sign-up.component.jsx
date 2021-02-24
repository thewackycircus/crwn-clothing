// library imports
import React from 'react';

// component imports
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// styles imports
import './sign-in-and-sign-up.styles.scss';

// SignInAndSignOut is a fuction rather than a class as it does not need to use this.state
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;