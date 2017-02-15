import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import VendorPage from './components/vendor/VendorPage';
import OwnerPage from './components/owner/OwnerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="vendor" component={VendorPage} />
    <Route path="owner" component={OwnerPage} />
  </Route>
);