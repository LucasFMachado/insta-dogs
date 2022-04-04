import React from 'react'

import styles from './Error.module.css'

const Error = ({message}) => {

  if (!message) {
    return null
  }

  return (
    <p className={styles.message}>
      {message}
    </p>
  )
}

export default Error