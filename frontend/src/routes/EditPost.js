import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from '../components/PostForm';
import NotFound from './NotFound';
import { getPostByPostId } from '../redux/actions';

class EditPost extends Component {
  componentDidMount() {
    console.log('editPost');
    this.props.getPostByPostId(this.props.match.params.postId);
  }
  editPost = post => {};
  render() {
    const { post } = this.props;
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
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

export default connect(mapStateToProps, { getPostByPostId })(EditPost);
