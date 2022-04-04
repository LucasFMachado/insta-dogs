import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../services/api'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) {
        throw new Error('Erro: Usuário inválido')
      }
      const { token } = await tokenRes.json()
      window.localStorage.setItem('token.dogs', token)
      await getUser(token)
      navigate('/conta')
    } catch(err) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(null)
      setLogin(false)
      setLoading(false)
      setError(null)
      window.localStorage.removeItem('token.dogs')
      navigate('/login')
    }, [navigate]
  )

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token.dogs')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) {
            throw new Error('Token inválido')
          }
          await getUser(token)
        } catch(err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{
      userLogin,
      userLogout,
      data,
      error,
      loading,
      login
    }}>
      {children}
    </UserContext.Provider>
  )
}