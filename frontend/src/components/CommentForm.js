import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

const defaultState = {
  comment: '',
  author: '',
};

class CommentForm extends Component {
  state = defaultState;

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const comment = {
      body: this.state.comment,
      author: this.state.author,
    };
    this.props.addComment(comment);
    this.setState(defaultState);
  };

  render() {
    const { author, comment } = this.state;
    return (
      <form className="my-4" onSubmit={this.handleSubmit}>
        <InputText id="comment" value={comment} required disabled={false} handleChange={this.handleChange} />
        <InputText id="author" value={author} required disabled={false} handleChange={this.handleChange} />
        <div className="mt-4">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Add Comment
          </button>
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
