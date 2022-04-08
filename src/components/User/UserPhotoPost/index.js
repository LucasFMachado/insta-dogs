import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PHOTO_POST } from '../../../services/api'
import useForm from '../../../hooks/useForm'
import useFetch from '../../../hooks/useFetch'
import Head from '../../Helpers/Head'
import Input from '../../Form/Input'
import Button from '../../Form/Button'
import Error from '../../Helpers/Error'

import styles from './styles.module.css'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = useState({})
  const { data, error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      navigate('/conta')
    }
  }, [data, navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = localStorage.getItem('token.dogs')
    const { url, options } = PHOTO_POST(formData, token)
    await request(url, options)
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Postar foto" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="nome"
          {...nome}
        />
        <Input
          label="Peso"
          type="number"
          name="peso"
          {...peso}
        />
        <Input
          label="Idade"
          type="number"
          name="idade"
          {...idade}
        />
        <input
          id="img"
          type="file"
          name="img"
          onChange={handleImgChange}
          className={styles.file}
        />
        {loading
          ? <Button disabled>Carregando..</Button>
          : <Button>Enviar</Button>
        }
        <Error message={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{backgroundImage: `url('${img.preview}')`}}
          ></div>
        )}
      </div>
    </section>
  )
}

export default UserPhotoPost