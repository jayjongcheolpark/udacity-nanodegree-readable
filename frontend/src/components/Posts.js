import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({ posts }) => {
  const renderPosts = posts.length > 0 ? posts.map(post => <Post key={post.id} post={post} />) : <div />;
  return <ul className="list-group">{renderPosts}</ul>;
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
