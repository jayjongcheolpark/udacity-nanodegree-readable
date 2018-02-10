import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';
import NewPostButton from '../components/NewPostButton';
import { getAllCategories, getPostsByCategory } from '../redux/actions';
import { GET_POSTS_BY_CATEGORY } from '../redux/constants/posts';

class AllPosts extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  componentWillReceiveProps(nextProps) {
    const nextFilters = nextProps.categories;
    const thisFilters = this.props.categories;
    if (thisFilters.length === 0 && nextFilters.length !== 0) {
      nextFilters.forEach(filter => {
        this.props.getPostsByCategory(filter);
      });
    }
  }

  render() {
    const { posts, categories } = this.props;
    const allPosts = [];
    if (categories.length > 0 && posts) {
      categories.forEach(category => {
        if (posts[category] && posts[category].length > 0) {
          posts[category].forEach(post => allPosts.push(post));
        }
      });
      console.log(allPosts);
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
  }
}

AllPosts.defaultProps = {
  posts: {
    react: [],
    redux: [],
    udacity: [],
  },
};

AllPosts.propTypes = {
  posts: PropTypes.object,
  categories: PropTypes.array.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts, categories }) => ({
  posts,
  categories,
});

export default connect(mapStateToProps, { getAllCategories, getPostsByCategory })(AllPosts);
