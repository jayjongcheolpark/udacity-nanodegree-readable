import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditBadge from './EditBadge';
import Badge from './Badge';
import CloseButton from './CloseButton';
import CommentCount from './CommentCount';
import VoteButtons from './VoteButtons';
import { deletePost, upVoteToPost, downVoteToPost } from '../redux/actions';
import { dateFormat } from '../utils';

class PostDetail extends Component {
  state = {
    redirect: false,
  };
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.setState({ redirect: true });
  };

  voteUp = () => {
    const { id } = this.props.post;
    this.props.upVoteToPost(id);
  };

  voteDown = () => {
    const { id } = this.props.post;
    this.props.downVoteToPost(id);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const { id, title, category, body, author, timestamp, voteScore, commentCount } = this.props.post;

    const badgeColor = voteScore >= 10 ? 'badge-danger' : 'badge-secondary';

    return (
      <div className="my-4 post">
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-start">
            <h4 className="mr-2">{title}</h4>
            <EditBadge link={`/${category}/${id}/edit`} />
          </div>
          <CloseButton closeHandler={this.deletePost} />
        </div>
        <small>Post By {author} / </small>
        <small>{dateFormat(timestamp)}</small>
        <div>
          <Badge label={category} />
          <Badge label="Vote" badgeColor={badgeColor} voteCount={voteScore} />
        </div>
        <div className="my-5">
          <p>{body}</p>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <CommentCount commentCount={commentCount} />
          <VoteButtons voteUp={this.voteUp} voteDown={this.voteDown} />
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  upVoteToPost: PropTypes.func.isRequired,
  downVoteToPost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

export default connect(mapStateToProps, { deletePost, upVoteToPost, downVoteToPost })(PostDetail);
