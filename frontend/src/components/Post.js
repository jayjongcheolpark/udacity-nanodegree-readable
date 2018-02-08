import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import SmallLabel from './SmallLabel';
import Badge from './Badge';
import CommentCount from './CommentCount';

const Post = ({ post }) => {
  const { id, category, title, author, body, timestamp, commentCount, voteScore } = post;
  return (
    <li className="list-group-item post">
      <Link className="h2" to={`/${category}/${id}`}>
        {title}
      </Link>
      <SmallLabel label={`post by ${author}`} />
      <Badge label={category} />
      <Badge label="Vote" badgeColor="badge-secondary" voteCount={voteScore} />
      <div className="my-3">
        <TextTruncate line={1} truncateText="..." text={body} />
      </div>
      <SmallLabel label={new Date(timestamp).toString()} />
      <CommentCount commentCount={commentCount} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
