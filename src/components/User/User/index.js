import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserContext } from '../../../contexts/UserContext'
import Feed from '../../Feed/Feed'
import Head from '../../Helpers/Head'
import PageNotFound from '../../Helpers/PageNotFound'
import UserHeader from '../UserHeader'
import UserPhotoPost from '../UserPhotoPost'
import UserStats from '../UserStats'

const User = () => {
  const { data } = useContext(UserContext)
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  )
}

export default User
