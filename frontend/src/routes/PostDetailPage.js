import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import { getPostByPostId } from '../redux/actions';

class PostDetailPage extends Component {
  state = {};

  componentDidMount() {
    this.props.getPostByPostId(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;
    if (post.err) {
      return <Redirect to="/error/InvalidPostId" />;
    }
    return (
      <div>
        <PostDetail post={post} />
      </div>
    );
  }
}

PostDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  getPostByPostId: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

export default connect(mapStateToProps, { getPostByPostId })(PostDetailPage);
