// library imports
import React from 'react';

// component imports
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// data imports
import SHOP_DATA from './shop.data';

// ShopPage is a class rather than a funciton as it needs to make use of state from the react.component library
// It uses this.state to store data imported form shop.data
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        // this.state is where the data for the shop will be held
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            // This block of code deconstructs the data from this.state and parses it to CollectionPreview components
            <div className='shop-page'>{
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }</div>
        );
    }
}

export default ShopPage;