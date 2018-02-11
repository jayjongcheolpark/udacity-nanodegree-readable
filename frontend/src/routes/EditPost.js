import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PostForm from '../components/PostForm';
import NotFound from './NotFound';
import { getPostByPostId, editPostByPostId } from '../redux/actions';

class EditPost extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.props.getPostByPostId(this.props.match.params.postId);
  }

  editPost = ({ id, title, body }) => {
    this.props.editPostByPostId({
      id,
      title,
      body,
    });
    this.setState({ redirect: true });
  };

  render() {
    const { post } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (post === {}) {
      return <NotFound />;
    }

    return (
      <div className="mt-5 container">
        <PostForm submitPost={this.editPost} post={post} isNew={false} />
      </div>
    );
  }
}

EditPost.defaultProps = {
  post: {},
};

EditPost.propTypes = {
  post: PropTypes.object,
  getPostByPostId: PropTypes.func.isRequired,
  editPostByPostId: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

export default connect(mapStateToProps, { getPostByPostId, editPostByPostId })(EditPost);
