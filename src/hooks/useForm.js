import { useState } from 'react'

const validateTypes = {
  email: {
    // eslint-disable-next-line no-useless-escape
    regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido'
  },
  number: {
    regex: /^\d+$/,
    message: 'Somente permitido inserir números'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate() {
    if (type === false) {
      return true
    }

    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    }

    if (validateTypes[type] && !validateTypes[type].regex.test(value)) {
      setError(validateTypes[type].message)
      return false
    }

    setError(null)
    return true
  }

  function onChange({target}) {
    if (error) {
      validate(target.value)
    }
    setValue(target.value)
  }

  return ({
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  })
}

export default useForm