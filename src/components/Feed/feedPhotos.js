import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../services/api'
import FeedPhotosItem from './feedPhotosItem'
import Error from '../Helpers/Error'
import Loading from '../Helpers/Loading'

import styles from './FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto}) => {

  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0
      })
      const { response, json } = request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request])

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
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  )
}

export default FeedPhotos