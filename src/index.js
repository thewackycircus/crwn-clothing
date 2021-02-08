// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// component imports
import App from './App';

// styles imports
import './index.css';

ReactDOM.render(
    // <BrowserRouter> from react-router-dom incases the whole app so our routing logic will work
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
