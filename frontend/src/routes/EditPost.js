import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';

class EditPost extends Component {
  editPost = post => {};
  render() {
    return (
      <div className="py-5 px-4 edit-post">
        <PostForm submitPost={this.editPost} isNew={false} />
      </div>
    );
  }
}

EditPost.propTypes = {};

export default EditPost;
