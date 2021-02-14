// library imports
import React from 'react';

// styles imports
import './form-input.styles.scss';

// FormInput is a fuction as a pose to a class as it does not need to aceess this.state
// It instead gets its props from the sign-in component
const FormInput = ({handleChange, label, ...otherProps}) => (
    // this block of code uses labels and inputs to create the text fields for the user to fill in.
    // Using css, it uses the 'shrink' in the classname name to shirnk the text and move it upwards 
    // when the text field contains value or in other words, when the user has typed something into the text field
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? (
                <label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`} >
                {label}
                </label>)
            : null
        }
    </div>
);

export default FormInput;