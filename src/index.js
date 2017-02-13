import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import store from './redux/store';
import App from './App';
import Apartment from './Apartment';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="apartment/:name" component={Apartment} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
