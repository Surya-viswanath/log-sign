import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/log" element={<Login/>}></Route>
        <Route path="" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
