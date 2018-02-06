import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import Posts from '../components/Posts'

class AllPosts extends Component {
  render () {
    const { posts, categories } = this.props
    let allPosts = []
    if (categories.length > 0 && posts) {
      categories.forEach(category => {
        if(posts[category] && posts[category].length > 0) {
          posts[category].forEach(post => allPosts.push(post))
        }
      })
      console.log(allPosts)
    }
    return (
      <div className="container mt-5">
        <Filter />
        <div className="mt-5">
          <Posts posts={allPosts} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({posts, categories}) => ({
  posts,
  categories
})

export default connect(mapStateToProps)(AllPosts)