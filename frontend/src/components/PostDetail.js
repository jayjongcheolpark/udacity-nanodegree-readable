import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    const { title, body, author, timestamp, voteScore, commentCount } = this.props.post;
    return (
      <div className="mt-5 post">
        <h3>{title}</h3>
        <small>Post By {author} / </small>
        <small>{new Date(timestamp).toString()}</small>
        <div className="my-5">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default PostDetail;
