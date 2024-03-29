import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import { UserContext } from '../../contexts/UserContext'
import styles from './styles.module.css'

function Header () {
  const { data } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data
          ? (
            <Link className={styles.login} to="/conta">
              {data.nome}
            </Link>
            )
          : (
            <Link className={styles.login} to="/login">
              Login / Cadastro
            </Link>
            )
        }
      </nav>
    </header>
  )
}

export default Header
