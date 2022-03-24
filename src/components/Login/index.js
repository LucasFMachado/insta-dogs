import React from "react"
import { Route, Routes } from "react-router"
import LoginCreate from "./create"
import LoginForm from "./form"
import LoginPasswordLost from "./passwordLost"
import LoginPasswordReset from "./passwordReset"

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginPasswordLost />} />
        <Route path="/resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login