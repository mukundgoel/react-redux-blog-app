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

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

we can replace this by { fetchPosts: fetchPosts } in connect function below
also note { fetchPosts: fetchPosts } can be replaced by { fetchPosts }
*/

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);