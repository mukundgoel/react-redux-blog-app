import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import routes from './routes';
import reducers from './reducers';

// [browserHistory]: http://www.blog.com/posts/5
// When /posts/5 changes, react-router will update

// [hashHistory]: http://www.blog.com/#posts/5
// We will keep track of user using everything after the hash sign

// [memoryHistory]: it does not use URL for reading history

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
