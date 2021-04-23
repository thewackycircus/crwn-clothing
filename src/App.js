// library imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

// firebase imports
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// redux imports
import {setCurrentUser} from './redux/user/user.actions';

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

  unsubscribeFromAuth = null;

  // This block of code sets this.state.currentUser to user which is part of firebase's onAuthStateChanged function
  // componentDidmount is called when the webpage is loaded and elemtns or mounted onto the webpage
  componentDidMount() {
    // saving this.props as setCurrentUser
    const {setCurrentUser} = this.props;
    // onAuthStateChanged adds an observer for changes to the user's signin state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if the user is logging in (userAuth != null)
      if (userAuth) {
        // Finds userAuth or create one if none exist
        const userRef = await createUserProfileDocument(userAuth);

        // setting this.state to the snapshot of userRef data
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      }

      setCurrentUser(userAuth);
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
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOutPage} />
      </Switch>
    </div>
    );
  }
}

// this returns props
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// This exports App with 
// null is in place of mapStateToProps because the App script does not need to be able to read the state
export default connect(null, mapDispatchToProps)(App); 
