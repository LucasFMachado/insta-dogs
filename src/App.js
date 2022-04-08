import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import PageNotFound from './components/Helpers/PageNotFound'
import ProtectedRoute from './components/Helpers/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login/Login'
import Photo from './components/Photo/Photo'
import User from './components/User/User'
import UserProfile from './components/User/UserProfile'
import { UserProvider } from './contexts/UserContext'

import './App.css'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
