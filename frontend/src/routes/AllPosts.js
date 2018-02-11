import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';
import NewPostButton from '../components/NewPostButton';
import RadioForSort from '../components/RadioForSort';
import { setSortBy } from '../redux/actions';

class AllPosts extends Component {
  changeSortBy = e => this.props.setSortBy(e.target.value);

  render() {
    const { posts, categories, sortBy } = this.props;
    const allPosts = [];
    if (categories.length > 0 && posts) {
      categories.forEach(category => {
        if (posts[category] && posts[category].length > 0) {
          posts[category].forEach(post => allPosts.push(post));
        }
      });
    }
    return (
      <div className="mt-5 container">
        <Filter />
        <NewPostButton />
        <div className="my-4">
          <RadioForSort sortBy={sortBy} changeHandler={this.changeSortBy} />
          <Posts posts={allPosts} />
        </div>
      </div>
    );
  }
}

AllPosts.propTypes = {
  posts: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  setSortBy: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts, categories, sortBy }) => ({
  posts,
  categories,
  sortBy,
});

export default connect(mapStateToProps, { setSortBy })(AllPosts);
