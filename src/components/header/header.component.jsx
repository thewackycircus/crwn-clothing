//library imports
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

// firebase imports
import {auth} from '../../firebase/firebase.utils';

// asset imports
import {ReactComponent as Logo} from '../../assets/crown.svg';

// styles imports
import './header.styles.scss';

// Header is a fuctions rather than a class as it does not need to make use of this.state
// and instead is parsed props
const Header = ({currentUser}) => (
    // This code creates a logo within a link tag and two more links. These are used to navigate the different pages
    // It is parsed the currentUser prop from app.js and uses this to determine if the user is logged in or not
    // It then uses that information to either display a signin link or a signout div
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
);

// This gets props from the root-reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

// This exports header with currentUser prop from mapStateToProps
export default connect(mapStateToProps)(Header); 