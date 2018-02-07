import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ id, title, commentCount }) => {
  const renderCommentLength = commentCount === 1 ? '1 comment' : `${commentCount} comments`;
  return (
    <li className="list-group-item" style={{ backgroundColor: '#fe5619', border: '1px dashed white' }}>
      <div>{id}</div>
      {title}
      <div>{renderCommentLength}</div>
    </li>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default Post;
