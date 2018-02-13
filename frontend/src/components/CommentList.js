import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import { upVoteToComment, downVoteToComment, deleteComment, editComment } from '../redux/actions';

const CommentList = props => {
  const upVoteHandler = id => {
    props.upVoteToComment(id);
  };
  const downVoteHandler = id => {
    props.downVoteToComment(id);
  };
  const deleteCommentHandler = id => {
    props.deleteComment(id);
  };
  const editCommentHandler = ({ id, body }) => {
    props.editComment({ id, body });
  };
  const renderComments = props.comments.map(comment => (
    <Comment
      key={comment.id}
      comment={comment}
      upVote={upVoteHandler}
      downVote={downVoteHandler}
      deleteComment={deleteCommentHandler}
      editComment={editCommentHandler}
    />
  ));
  return <ul className="list-group my-4">{renderComments}</ul>;
};

CommentList.propTypes = {
  upVoteToComment: PropTypes.func.isRequired,
  downVoteToComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};

export default connect(null, { upVoteToComment, downVoteToComment, deleteComment, editComment })(CommentList);
