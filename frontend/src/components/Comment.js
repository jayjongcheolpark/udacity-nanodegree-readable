import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import CloseButton from './CloseButton';
import CommentEditForm from './CommentEditForm';
import VoteButtons from './VoteButtons';
import { dateFormatCanada } from '../utils';

class Comment extends Component {
  state = {
    editMode: false,
  };

  upVote = () => {
    this.props.upVote(this.props.comment.id);
  };
  downVote = () => {
    this.props.downVote(this.props.comment.id);
  };
  deleteComment = () => {
    this.props.deleteComment(this.props.comment.id);
  };

  editComment = body => {
    this.props.editComment({
      id: this.props.comment.id,
      body,
    });
    this.setState({ editMode: false });
  };

  editMode = () => {
    this.setState({ editMode: true });
  };

  render() {
    const { body, voteScore, author, timestamp } = this.props.comment;

    const renderCommentBody = this.state.editMode ? (
      <CommentEditForm defaultVal={body} editComment={this.editComment} />
    ) : (
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          {body}&nbsp;
          <button type="button" className="badge badge-success" onClick={this.editMode}>
            Edit <i className="fa fa-pencil-square-o" aria-hidden="true" />
          </button>
        </div>
        <CloseButton closeStyle="text-muted" closeHandler={this.deleteComment} />
      </div>
    );

    const badgeColor = voteScore >= 10 ? 'badge-danger' : 'badge-secondary';
    return (
      <li className="list-group-item list-group-item-warning">
        {renderCommentBody}
        <div>
          <small className="text-muted">commented by {author}</small>
          {' / '}
          <small className="text-muted">{dateFormatCanada(timestamp)}</small>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
          <div>
            <VoteButtons voteUp={this.upVote} voteDown={this.downVote} />
          </div>
        </div>
      </li>
    );
  }
}

Comment.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

export default Comment;
