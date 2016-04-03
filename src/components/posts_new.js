import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form'; // almost identical to the connect function from redux-react
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// context does not have to be deliberately passed from parent to child
// <div className="...."> -> here we are explicitly passing className to div

class PostsNew extends Component {
  // try to avoid using context
  // only use it when using react-router
  static contextTypes = {
    router: function () {
      return React.PropTypes.func.isRequired;
    }
  };

  onSubmit(props) {
    // createPost is an Action Creator that creates a Promise as its payload
    // whenever we call an Action Creator that creates a promise as its payload
    // this call will return the same promise. When promise is resolved,
    // then it means blog post was successfully created.
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // we navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push("/");
      });
  };

  render() {
    // redux-form injects props to this.props automatically
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      // in handleSubmit we can pass an ActionCreator that will be called when form is
      // submitted and the form is valid

      // touched will help us determined if user interacted with this component
      // will help us not show error when user loads page the first time

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

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
        <Link to="/" className="btn btn-danger">Cancel</Link>

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