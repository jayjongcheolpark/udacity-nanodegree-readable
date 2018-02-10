import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';
import NewPostButton from '../components/NewPostButton';

const PostsByCategory = props => (
  <div className="py-5 px-4 all-posts">
    <Filter filter={props.match.params.category} />
    <NewPostButton />
    <div className="my-4">
      <Posts posts={props.posts} />
    </div>
  </div>
);

PostsByCategory.defaultProps = {
  posts: [],
};

PostsByCategory.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ posts }, ownProps) => ({
  posts: posts[ownProps.match.params.category],
});

export default connect(mapStateToProps)(PostsByCategory);
