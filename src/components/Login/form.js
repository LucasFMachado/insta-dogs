import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from "../../hooks/useForm"
import { TOKEN_POST, USER_GET } from "../../services/api"

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token.dogs')
    if (token) {
      getUser(token)
    }
  }, [])
  
  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.warn(json)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      })

      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem('token.dogs', json.token)
      getUser(json.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
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
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm