import React from 'react'
import faker from 'faker'

const CommentDetail = () => {
  return (
    <div className="comment">
        <div className="avatar">
          <img src={faker.image.avatar()} alt="avatar" /></div>
        <div className="content">
          <a className="author" href="/">Matt</a>
          <div className="metadata"><div>Today at 5:42PM</div></div>
          <div className="text">How artistic!</div>
        </div>
    </div>

  )
}

export default CommentDetail