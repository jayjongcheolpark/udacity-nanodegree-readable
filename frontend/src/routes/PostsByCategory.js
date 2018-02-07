import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import Posts from '../components/Posts';

class PostsByCategory extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="container mt-5">
        <Filter filter={this.props.match.params.category} />
        <div className="mt-5">
          <Posts posts={posts} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  posts: posts[ownProps.match.params.category],
});

export default connect(mapStateToProps)(PostsByCategory);
