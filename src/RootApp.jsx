import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import React from 'react';
import Container from './containers/Container'

const RootApp = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Container} />
    </div>
  </BrowserRouter>
);

export default RootApp;
