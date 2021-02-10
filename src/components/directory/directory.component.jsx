// library imports
import React from 'react';

// component imports
import MenuItem from '../menu-item/menu-item.component';

// sytles imports
import './directory.styles.scss';

// Directory is a class rather than a funciton as it needs to make use of state from the react.component library
class Directory extends React.Component {
    constructor() {
        super();
        
        // this.state is where the data for the directory will be held
        this.state = {
            sections: 
            [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
            ] 
        }
    }

    render () {
        return (
            // this block of code deconstructs the data from state.sections and parses it to a menu item component
            // that is constructed for each item within the sections array
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default Directory;