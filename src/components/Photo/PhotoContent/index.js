import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../../../contexts/UserContext'
import Image from '../../Helpers/Image'
import PhotoComments from '../PhotoComments'
import PhotoDelete from '../PhotoDelete'
import styles from './styles.module.css'

const PhotoContent = ({ data, singlePage }) => {
  const { photo, comments } = data
  const user = useContext(UserContext)

  return (
    <div className={`${styles.photo} ${singlePage ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data?.username === photo.author
              ? <PhotoDelete id={photo.id} />
              : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            }
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade < 1 ? 'meses' : 'anos'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments
        id={photo.id}
        comments={comments}
        singlePage={singlePage}
      />
    </div>
  )
}

export default PhotoContent
