import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';
import NewPostButton from '../components/NewPostButton';
import RadioForSort from '../components/RadioForSort';
import { setSortBy } from '../redux/actions';
import { getSortedPosts } from '../utils';

class PostsByCategory extends Component {
  changeSortBy = e => this.props.setSortBy(e.target.value);

  render() {
    const { posts, sortBy } = this.props;
    return (
      <div className="mt-5 container">
        <Filter filter={this.props.match.params.category} />
        <NewPostButton />
        <div className="my-4">
          <RadioForSort sortBy={sortBy} changeHandler={this.changeSortBy} />
          <Posts posts={getSortedPosts(posts, sortBy)} />
        </div>
      </div>
    );
  }
}

PostsByCategory.defaultProps = {
  posts: [],
};

PostsByCategory.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object.isRequired,
  setSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
};

const mapStateToProps = ({ posts, sortBy }, ownProps) => ({
  posts: posts[ownProps.match.params.category],
  sortBy,
});

export default connect(mapStateToProps, { setSortBy })(PostsByCategory);
