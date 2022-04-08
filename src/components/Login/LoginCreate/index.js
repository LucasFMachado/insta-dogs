import React, { useContext } from 'react'

import { UserContext } from '../../../contexts/UserContext'
import useFetch from '../../../hooks/useFetch'
import useForm from '../../../hooks/useForm'
import { USER_POST } from '../../../services/api'
import Button from '../../Form/Button'
import Input from '../../Form/Input'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()
  const { loading, error, request } = useFetch()
  const { userLogin } = useContext(UserContext)

  async function handleSubmit (e) {
    e.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response.ok) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Criar conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Usuário"
          type="text"
          {...username}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          {...email}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          {...password}
        />
        {loading
          ? <Button disabled>Carregando..</Button>
          : <Button>Cadastrar</Button>
        }
        <Error message={error} />
      </form>
    </section>
  )
}

export default LoginCreate
