import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderinput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderinput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderinput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Used to validate form for required fields
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a stream title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a stream description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
