import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import PostDetail from '../components/PostDetail';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { getPostByPostId, addComment, getAllCommentsByPostId } from '../redux/actions';

class PostDetailPage extends Component {
  state = {};

  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.getAllCommentsByPostId(postId);
    this.props.getPostByPostId(postId);
  }

  addCommentHandler = comment => {
    comment.parentId = this.props.match.params.postId;
    this.props.addComment(comment);
  };

  render() {
    const { post, comments } = this.props;
    if (post.err) {
      return <Redirect to="/error/InvalidPostId" />;
    }
    const renderCommentList = !_.isEmpty(comments) && <CommentList comments={this.props.comments} />;

    return (
      <div>
        <PostDetail post={post} />
        <hr />
        <CommentForm addComment={this.addCommentHandler} />
        <hr />
        {renderCommentList}
      </div>
    );
  }
}

PostDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  getPostByPostId: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  getAllCommentsByPostId: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = ({ post, comments }) => ({
  post,
  comments,
});

export default connect(mapStateToProps, { getPostByPostId, addComment, getAllCommentsByPostId })(PostDetailPage);
