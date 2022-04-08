import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { UserContext } from '../../../contexts/UserContext'
import Head from '../../Helpers/Head'
import PageNotFound from '../../Helpers/PageNotFound'
import LoginCreate from '../LoginCreate'
import LoginForm from '../LoginForm'
import LoginPasswordLost from '../LoginPasswordLost'
import LoginPasswordReset from '../LoginPasswordReset'
import styles from './styles.module.css'

const Login = () => {
  const { login } = useContext(UserContext)

  if (login) {
    return <Navigate to='/conta' />
  }

  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
