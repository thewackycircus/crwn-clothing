// library imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// firebase imports
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// component imports
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

// styles imports
import './App.css';

// App is a class rather than a function as it needs to make use of this.state
// this.state is used to store user profiles
class App extends React.Component {
  constructor() {
    super();

    // this.state is where the user profile data will be stored
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // This block of code sets this.state.currentUser to user which is part of firebase's onAuthStateChanged function
  // componentDidmount is called when the webpage is loaded and elemtns or mounted onto the webpage
  componentDidMount() {
    // onAuthStateChanged adds an observer for changes to the user's signin state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if the user is logging in (userAuth != null)
      if (userAuth) {
        // Finds userAuth or creates one if none exist
        const userRef = await createUserProfileDocument(userAuth);

        // setting this.state to the snapshot of userRef data
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });

          console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    // onAuthStateChange also returns firebase.Unsubscribe which is why calling it again here,
    // through the unsubscribeFromAuth method defined above, works.
    this.unsubscribeFromAuth();
  }

  render() {
    // This block of code uses switch and route from the react-router-dom library
    // '/' is the base url, whatever that may be in match.url from the browser
    // '/...' is match.url + linkUrl from the component. This is how url routing
    // header is nested outside of the switch statement because it needs to be rendered on every page
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOutPage} />
      </Switch>
    </div>
    );
  }
}

export default App;
