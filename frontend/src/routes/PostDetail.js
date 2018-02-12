import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPostByPostId } from '../redux/actions';

class PostDetail extends Component {
  state = {};

  componentDidMount() {
    this.props.getPostByPostId(this.props.match.params.postId);
  }

  render() {
    if (this.props.post.err) {
      return <Redirect to="/error/InvalidPostId" />;
    }
    return <div>{this.props.post.title}</div>;
  }
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
  getPostByPostId: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post,
});

export default connect(mapStateToProps, { getPostByPostId })(PostDetail);
