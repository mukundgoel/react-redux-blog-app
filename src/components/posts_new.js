import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; // almost identical to the connect function from redux-react
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // redux-form injects props to this.props automatically
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      // in handleSubmit we can pass an ActionCreator that will be called when form is
      // submitted and the form is valid

      // touched will help us determined if user interacted with this component
      // will help us not show error when user loads page the first time

      <form onSubmit={handleSubmit(this.props.createPost)}>

        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? "has-danger": ""}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{title.touched ? title.error : ""}</div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? "has-danger": ""}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">{categories.touched ? categories.error : ""}</div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? "has-danger": ""}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">{content.touched ? content.error : ""}</div>
        </div>

        <button type="Submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

// When we enter text, it will call this function each time form is changed
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }

  if (!values.categories) {
    errors.categories = "Enter categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

// reduxForm is just like connect except it has an extra input
// connect: 1st argument is mapsStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: "PostsNew", // does not have to match component name
  fields: ['title', 'categories', 'content'],
  validate // this is the function we created above
}, null, { createPost })(PostsNew);

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