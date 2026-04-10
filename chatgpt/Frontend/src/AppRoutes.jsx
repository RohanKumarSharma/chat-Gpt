import { BrowserRouter, Routes, Route, useNavigate, useRoutes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { useEffect } from 'react'

const AppRoutes = () => {
   

    return (

        <BrowserRouter>
            <Routes>
                
               
                 <Route path='/' element={<Home></Home>} />
                 
                 <Route path='/register' element={<Register />} />
                 
                 
                     <Route path='/login' element={<Login></Login>} />
                 
              
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes