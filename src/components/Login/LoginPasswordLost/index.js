import React from 'react'

import useFetch from '../../../hooks/useFetch'
import useForm from '../../../hooks/useForm'
import { PASSWORD_LOST } from '../../../services/api'
import Button from '../../Form/Button'
import Input from '../../Form/Input'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'

const LoginPasswordLost = () => {
  const email = useForm('email')
  const { data, loading, error, request } = useFetch()

  async function handleSubmit (e) {
    e.preventDefault()
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: `${process.env.REACT_APP_APP_URL}/login/resetar`
      })
      const { json } = await request(url, options)
      console.warn(json)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Recuperar senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data
        ? <p style={{ color: '#4c1' }}>{data}</p>
        : (
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="text"
              name="email"
              {...email}
            />
            {loading
              ? <Button disabled>Enviando email..</Button>
              : <Button>Enviar email</Button>
            }
          </form>
          )
      }
      <Error message={error} />
    </section>
  )
}

export default LoginPasswordLost
