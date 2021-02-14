// library imports
import React from 'react';

// styles imports
import './custom-button.styles.scss';

// CustomButton is a fuction as a pose to a class as it does not need to aceess this.state
// It instead gets its props from the sign-in component
const CustomButton = ({children, ...otherProps}) => (
    // This block of code uses properties to create a custom button. children refers to whatever would noramlly be nested inside the tags.
    <button className = 'custom-button' {...otherProps} >
        {children}
    </button>
);

export default CustomButton;