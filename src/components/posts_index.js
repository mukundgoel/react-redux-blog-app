import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  componentWillMount() {
    // This is a React lifecycle event that will be called the first time the compoent
    // is about to be mounted to the DOM. It will not be called on subsequent rerenders.
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    )
  }
}

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

we can replace this by { fetchPosts: fetchPosts } in connect function below
also note { fetchPosts: fetchPosts } can be replaced by { fetchPosts }
*/

export default connect(null, { fetchPosts })(PostsIndex);