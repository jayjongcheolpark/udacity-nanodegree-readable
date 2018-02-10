import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';

class EditPost extends Component {
  editPost = post => {};
  render() {
    return (
      <div className="mt-5 container">
        <PostForm submitPost={this.editPost} isNew={false} />
      </div>
    );
  }
}

EditPost.propTypes = {};

export default EditPost;
