import React, { useState, useContext, useRef, useEffect } from 'react'

import { UserContext } from '../../../contexts/UserContext'
import PhotoCommentsForm from '../PhotoCommentsForm'
import styles from './styles.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.singlePage ? styles.single : ''}`}
      >
        {comments.map(comment => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          singlePage={props.singlePage}
        />
      )}
    </>
  )
}

export default PhotoComments
