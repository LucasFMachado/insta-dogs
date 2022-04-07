import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext'
import ProtectedRoute from './components/Helpers/ProtectedRoute';
import Photo from './components/Photo';
import UserProfile from './components/User/userProfile';
import PageNotFound from './components/Helpers/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
