// library imports
import React from 'react';

// component imports
import CollectionItem from '../collection-item/collection-item.component';

// sytles imports
import './collection-preview.styles.scss';

// CollectionPreview is a fuctions rather than a class as it does not need to make use of this.state
// and instead is parsed props
const CollectionPreview = ({title, items}) => (
    // This block of code creates the title for the collection preview and also displays each collection-item
    // The .filter funciton uses idx to ensure that only 4 items can be displayed at once
    // finally, it parsed the item data from shop-component.jsx to each CollectionItem component that is created
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id}{...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;