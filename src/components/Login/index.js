import React, { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import LoginCreate from "./create"
import LoginForm from "./form"
import LoginPasswordLost from "./passwordLost"
import LoginPasswordReset from "./passwordReset"

import styles from './Login.module.css'

const Login = () => {
  const { login } = useContext(UserContext)

  if (login) {
    return <Navigate to='conta' />
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login