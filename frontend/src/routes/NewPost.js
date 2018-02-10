import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';

class NewPost extends Component {
  addPost = post => {};
  render() {
    return (
      <div className="py-5 px-4 new-post h-100">
        <PostForm submitPost={this.addPost} isNew />
      </div>
    );
  }
}

NewPost.propTypes = {};

export default NewPost;
