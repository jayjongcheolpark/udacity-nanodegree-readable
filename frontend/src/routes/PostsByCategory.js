import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';

const PostsByCategory = props => (
  <div className="container mt-5">
    <Filter filter={props.match.params.category} />
    <div className="mt-5">
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
