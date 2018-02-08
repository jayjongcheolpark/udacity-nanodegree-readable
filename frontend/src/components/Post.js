import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import SmallLabel from './SmallLabel';
import Badge from './Badge';
import CommentCount from './CommentCount';
import CloseButton from './CloseButton';
import VoteButtons from './VoteButtons';

class Post extends Component {
  deletePost = () => {};
  voteUp = () => {};
  voteDown = () => {};
  render() {
    const { id, category, title, author, body, timestamp, commentCount, voteScore } = this.props.post;
    return (
      <li className="list-group-item post">
        <div className="d-flex justify-content-between align-items-start">
          <Link className="h2" to={`/${category}/${id}`}>
            {title}
          </Link>
          <CloseButton closeHandler={this.deletePost} />
        </div>
        <SmallLabel label={`post by ${author}`} />
        <Badge label={category} />
        <Badge label="Vote" badgeColor="badge-secondary" voteCount={voteScore} />
        <div className="my-3">
          <TextTruncate line={1} truncateText="..." text={body} />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <SmallLabel label={new Date(timestamp).toString()} />
            <CommentCount commentCount={commentCount} />
          </div>
          <VoteButtons voteUp={this.voteUp} voteDown={this.voteDown} />
        </div>
      </li>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect()(Post);
