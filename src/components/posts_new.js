import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; // almost identical to the connect function from redux-react

class PostsNew extends Component {
  render() {
    // redux-form injects props to this.props automatically
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>
        <button type="Submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNew", // does not have to match component name
  fields: ['title', 'categories', 'content']
})(PostsNew);

/* user types something in... record it on application state
state === {
  form: { // this comes from the "form" reducer
    PostsNewForm: {
      title: '....',
      categories: '....',
      content: '....'
    }
  }
}
*/