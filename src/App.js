// library imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// component imports
import HomePage from './pages/homepage/homepage.component'

// styles imports
import './App.css';

// HatsPage is a fuctions rather than a class as it does not need to make use of this.state
// This will be seperated into it's own script in later versions
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// HatsPage is a fuctions rather than a class as it does not need to make use of this.state
function App() {
  // This block of code uses switch and route from the react-router-dom library
  // '/' is the base url, whatever that may be in match.url from the browser
  // '/...' is match.url + linkUrl from the component. This is how url routing
  return <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  </div>;
}

export default App;
