import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {
  render () {
    const { posts } = this.props

    const renderPosts = posts.map(post => <Post key={post.id} post={post} />)
    return (
      <ul className="list-group">
        {renderPosts}
      </ul>
    )
  }
}

export default Posts