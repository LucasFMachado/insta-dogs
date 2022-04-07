import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../services/api'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'
import PhotoContent from './photoContent'

import styles from './Photo.module.css'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function getPhoto() {
      const { url, options } = PHOTO_GET(id)
      await request(url, options)
    }
    getPhoto()
  }, [id, request])

  if (error) {
    return <Error message={error} />
  }

  if (loading) {
    return <Loading />
  }

  if (!data) {
    return null
  }
  
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} singlePage />
    </section>
  )
}

export default Photo
