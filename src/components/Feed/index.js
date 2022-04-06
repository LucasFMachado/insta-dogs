import React, { useState } from 'react'
import FeedModal from './feedModal'
import FeedPhotos from './feedPhotos'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null)

  return (
    <div>
      {modalPhoto && <FeedModal
        photo={modalPhoto}
        setModalPhoto={setModalPhoto}
      />}
      <FeedPhotos
        setModalPhoto={setModalPhoto}
      />
    </div>
  )
}

export default Feed