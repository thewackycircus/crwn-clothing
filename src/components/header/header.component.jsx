//library imports
import React from 'react';
import {Link} from 'react-router-dom';

// asset imports
import {ReactComponent as Logo} from '../../assets/crown.svg';

// styles imports
import './header.styles.scss';

// Header is a fuctions rather than a class as it does not need to make use of this.state
// and instead is parsed props
const Header = () => (
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
        </div>
    </div>
);

export default Header;