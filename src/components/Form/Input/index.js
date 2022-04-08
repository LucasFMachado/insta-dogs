import React from 'react'

import styles from './styles.module.css'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
