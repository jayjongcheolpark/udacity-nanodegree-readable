import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import SmallLabel from './SmallLabel';

const Post = ({ post: { id, title, author, body, timestamp, commentCount, category } }) => {
  const renderCommentLength = commentCount === 1 ? '1 comment' : `${commentCount} comments`;
  return (
    <li className="list-group-item post">
      <Link className="h2" to={`/${category}/${id}`}>
        {title}
      </Link>
      <SmallLabel label={`post by ${author}`} />
      <div className="my-3">
        <TextTruncate line={1} truncateText="..." text={body} />
      </div>
      <SmallLabel label={new Date(timestamp).toString()} />
      <SmallLabel label={renderCommentLength} />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
