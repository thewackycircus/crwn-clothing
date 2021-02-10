// library imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// component imports
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component.jsx'

// styles imports
import './App.css';



// HatsPage is a fuctions rather than a class as it does not need to make use of this.state
function App() {
  // This block of code uses switch and route from the react-router-dom library
  // '/' is the base url, whatever that may be in match.url from the browser
  // '/...' is match.url + linkUrl from the component. This is how url routing
  // header is nested outside of the switch statement because it needs to be rendered on every page
  return <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  </div>;
}

export default App;
