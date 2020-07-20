import React from 'react'

const CommentDetail = (props) => {
  return (
    <div className="comment">
        <div className="avatar">
          <img src={props.imageUrl} alt="avatar" /></div>
        <div className="content">
          <a className="author" href="/">{props.author}</a>
          <div className="metadata"><div>{props.time}</div></div>
          <div className="text">{props.post}</div>
        </div>
    </div>

  )
}

export default CommentDetail