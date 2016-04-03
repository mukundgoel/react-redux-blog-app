import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from "./components/app";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

// if route is /, show App and PostsIndex
// if route is /posts/new, show App and PostsNew but not PostsIndex
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

// this.props.params.id is done by React Router automatically

// IndexRoute is a helper that behaves like a route but it will be shown when the
// url matches up with the path defined by the parent but not one of the children