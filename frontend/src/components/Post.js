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
import EditBadge from './EditBadge';
import { deletePost, upVoteToPost, downVoteToPost } from '../redux/actions';
import { dateFormat } from '../utils';

class Post extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  };

  voteUp = () => {
    this.props.upVoteToPost(this.props.post.id);
  };

  voteDown = () => {
    this.props.downVoteToPost(this.props.post.id);
  };

  render() {
    const { id, category, title, author, body, timestamp, commentCount, voteScore } = this.props.post;

    const badgeColor = voteScore >= 10 ? 'badge-danger' : 'badge-secondary';

    return (
      <li className="list-group-item post">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-start">
            <Link className="h2 mr-2" to={`/${category}/${id}`}>
              {title}
            </Link>
            <EditBadge link={`/${category}/${id}/edit`} />
          </div>
          <CloseButton closeHandler={this.deletePost} />
        </div>
        <SmallLabel label={`post by ${author}`} />
        <Badge label={category} />
        <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
        <div className="my-3">
          <TextTruncate line={1} truncateText="..." text={body} />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <SmallLabel label={dateFormat(timestamp)} />
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
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost, upVoteToPost, downVoteToPost })(Post);
