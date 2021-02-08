// library imports
import React from 'react';
import {withRouter} from 'react-router-dom';

// styles imports
import './menu-item.styles.scss';

// MenuItem is a fuctions rather than a class as it does not need to make use of this.state
// and instead is parsed props
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    // This block of code seperates each menu item into content and a background image.
    // The onClock prop adds the linkUrl prop onto the match.url from the browser. This is how the url routing works
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`) }>
        <div className='background-image' style= {{ backgroundImage: `url(${imageUrl})`}} /> 
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);