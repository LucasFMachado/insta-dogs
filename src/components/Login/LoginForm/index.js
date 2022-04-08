import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../../../contexts/UserContext'
import useForm from '../../../hooks/useForm'
import Button from '../../Form/Button'
import Input from '../../Form/Input'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'
import styles from './styles.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit (e) {
    e.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Usuário"
          type="text"
          {...username}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          {...password}
        />
        {loading
          ? <Button disabled>Carregando..</Button>
          : <Button>Entrar</Button>
        }
        <Error message={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>
          Cadastre-se
        </h2>
        <p>
          Ainda não possui conta? Cadastre-se.
        </p>
        <Link className={styles.buttonCriar} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm
