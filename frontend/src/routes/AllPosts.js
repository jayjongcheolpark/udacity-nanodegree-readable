import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';
import NewPostButton from '../components/NewPostButton';

const AllPosts = ({ posts, categories }) => {
  const allPosts = [];
  if (categories.length > 0 && posts) {
    categories.forEach(category => {
      if (posts[category] && posts[category].length > 0) {
        posts[category].forEach(post => allPosts.push(post));
      }
    });
  }
  return (
    <div className="container mt-5">
      <Filter />
      <NewPostButton />
      <div className="my-4">
        <Posts posts={allPosts} />
      </div>
    </div>
  );
};

AllPosts.propTypes = {
  posts: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = ({ posts, categories }) => ({
  posts,
  categories,
});

export default connect(mapStateToProps)(AllPosts);
