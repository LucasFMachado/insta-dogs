import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './userHeaderNav';

import styles from './UserHeader.module.css'

const UserHeader = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  const { matches } = window.matchMedia('(max-width: 40rem)')

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto')
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break;
      default:
        setTitle('Minha conta')
        break;
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader;