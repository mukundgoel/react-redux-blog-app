import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from "./components/app";
import PostsIndex from "./components/posts_index";

// if route is /, show App and PostsIndex
// if route is /greet, show App and Greeting but not PostsIndex
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);

// IndexRoute is a helper that behaves like a route but it will be shown when the
// url matches up with the path defined by the parent but not one of the children