import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
import { createBrowserHistory } from 'history'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'
// Containers
import Full from './containers/Full/'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
let store = createStore(rootReducer);
ReactDOM.render((
  <Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
  </Provider>
), document.getElementById('root'));
