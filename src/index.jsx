import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import RootApp from './RootApp';
import store from './store';
import './styles.css';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(RootApp);

module.hot.accept('./RootApp', () => {
  render(RootApp);
});
