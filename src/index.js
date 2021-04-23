// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

// component imports
import App from './App';

// redux imports
import store from './redux/store';

ReactDOM.render(
    // <Provider> from react-redux allows access to the redux store object and reducers
    // <BrowserRouter> from react-router-dom incases the whole app so our routing logic will work
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider>,
    document.getElementById('root')
);
