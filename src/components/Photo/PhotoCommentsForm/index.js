import React, { useState } from 'react'

import { ReactComponent as Enviar } from '../../../assets/enviar.svg'
import useFetch from '../../../hooks/useFetch'
import { COMMENT_POST } from '../../../services/api'
import Error from '../../Helpers/Error'
import styles from './styles.module.css'

const PhotoCommentsForm = ({ id, setComments, singlePage }) => {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  async function handleSubmit (e) {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${singlePage ? styles.single : ''}`}
      >
      <textarea
        id="comment"
        name="comment"
        placeholder="Insira um comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error message={error} />
    </form>
  )
}

export default PhotoCommentsForm
