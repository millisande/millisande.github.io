/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

const renderApp = Root => {
  const rootElement = document.getElementById('app');
  if (rootElement) {
    ReactDOM.render(
      <Router history={history}>
        <Root />
      </Router>,
      rootElement,
    );
  } else {
    console.log(
      'Check your public index.js file. Looks like you are missing the indentifier',
    );
  }
};

renderApp(App);
