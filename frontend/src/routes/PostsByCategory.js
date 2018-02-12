import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostsContainer from '../components/PostsContainer';
import { setSortBy } from '../redux/actions';

class PostsByCategory extends Component {
  changeSortBy = e => this.props.setSortBy(e.target.value);

  render() {
    const { posts, sortBy } = this.props;
    return (
      <PostsContainer
        filter={this.props.match.params.category}
        sortBy={sortBy}
        posts={posts}
        changeSortBy={this.changeSortBy}
      />
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

const mapStateToProps = ({ posts, sortBy, categories }, ownProps) => ({
  posts: posts[ownProps.match.params.category],
  sortBy,
  categories,
});

export default connect(mapStateToProps, { setSortBy })(PostsByCategory);
