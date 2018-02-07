import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCommentsByPostId } from '../redux/actions';

class Post extends Component {
  componentDidMount() {
    this.props.getAllCommentsByPostId(this.props.post.id);
  }
  render() {
    const { post } = this.props;
    console.log(this.props);
    const renderCommentLength = post.commentsNum === 1 ? '1 comment' : `${post.commentsNum} comments`;
    return (
      <li className="list-group-item" style={{ backgroundColor: '#fe5619', border: '1px dashed white' }}>
        <div>{this.props.post.id}</div>
        {this.props.post.title}
        <div>{renderCommentLength}</div>
      </li>
    );
  }
}

export default connect(null, { getAllCommentsByPostId })(Post);
