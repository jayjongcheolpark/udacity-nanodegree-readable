import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { addPost } from '../redux/actions';

class NewPost extends Component {
  state = {
    redirect: false,
  };
  addPost = post => {
    this.props.addPost(post);
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="mt-5 container">
        <PostForm submitPost={this.addPost} isNew />
      </div>
    );
  }
}

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(NewPost);
