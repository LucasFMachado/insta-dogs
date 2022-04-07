import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './userHeader';
import UserPhotoPost from './userPhotoPost';
import UserStats from './userStats';
import Feed from '../Feed'

import { UserContext } from '../../contexts/UserContext';
import PageNotFound from '../Helpers/PageNotFound';

const User = () => {
  const { data } = useContext(UserContext)
  return (
    <section className="container">
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

export default User;