// library imports
import React from 'react';

// styles imports
import './collection-item.styles.scss';

// CollectionItem is a fuctions rather than a class as it does not need to make use of this.state
// and instead is parsed props
const CollectionItem = ({id, name, price, imageUrl}) => (
    // This block of code displays an image, name and price that is parsed to it from Collection-Preview
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;