
require('./css/index.less');

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.jsx';
import store from './stores/configure-store';


// Create a root element
ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, 
    document.getElementById('root')
);
