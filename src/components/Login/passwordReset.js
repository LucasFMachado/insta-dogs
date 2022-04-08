import React, { useEffect, useState } from "react"
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import Head from '../Helpers/Head'
import Input from '../Form/Input'
import Button from '../Form/Button'
import Error from '../Helpers/Error'
import { PASSWORD_RESET } from "../../services/api"
import { useNavigate } from "react-router-dom"

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) {
      setKey(key)
    }

    if (login) {
      setLogin(login)
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) {
        navigate('/login')
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar senha" />
      <h1 className="title">Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading
          ? <Button disabled>Resetando a senha..</Button>
          : <Button>Resetar senha</Button>
        }
      </form>
      <Error message={error} />
    </section>
  )
}

export default LoginPasswordReset