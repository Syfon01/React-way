import React from 'react'
import faker from 'faker'

const CommentDetail = (props) => {
  return (
    <div className="comment">
        <div className="avatar">
          <img src={faker.image.avatar()} alt="avatar" /></div>
        <div className="content">
          <a className="author" href="/">{props.author}</a>
          <div className="metadata"><div>Today at 5:42PM</div></div>
          <div className="text">{props.post}</div>
        </div>
    </div>

  )
}

export default CommentDetail