import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './Home'
import RegisterForm from './RegisterForm'
import View from './View'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/register-form" element={<RegisterForm/>}/>
      <Route path ="/edit-form/:id" element ={<RegisterForm/>}/>
      <Route path="/view-form/:id" element={<View/>}/>
    </Routes>
    </div>
  )
}

export default App
