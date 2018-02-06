import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCommentsByPostId } from '../redux/actions/comments'

class Post extends Component {
  componentDidMount() {
    this.props.getAllCommentsByPostId(this.props.post.id)
  }
  render () {
    const { post, comments } = this.props
    let length = 0;
    if (comments.length > 0) {
      length = comments.filter(comment => comment.parentId === post.id).length
    }
    const renderCommentLength = (length === 1 ? "1 comment": `${length} comments`)
    return (
      <li className="list-group-item" style={{ backgroundColor: "#fe5619", border: "1px dashed white"}}>
        <div>
        {this.props.post.id}
        </div>
        {this.props.post.title}
        <div>
          {renderCommentLength}
        </div>

      </li>
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  comments
})

export default connect(mapStateToProps, { getAllCommentsByPostId })(Post)