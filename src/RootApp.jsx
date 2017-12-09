import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Container from './containers/Container';

function RootApp() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Container} />
      </div>
    </BrowserRouter>
  );
}

export default RootApp;
