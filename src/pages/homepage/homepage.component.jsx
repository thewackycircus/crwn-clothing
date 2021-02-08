// library imports
import React from 'react';

// component imports
import Directory from '../../components/directory/directory.component';

// styles imports
import './homepage.styles.scss'

// HomePage is a fuctions rather than a class as it does not need to make use of this.state
const HomePage = () => (
    // This block of code calls the Directory component that houses each menu item component.
    // More will added to this section in later versions, such as a header bar
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;