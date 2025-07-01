import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import Login from './components/admin/Login'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Dashboard from './components/admin/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:category' element={<Shop/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/shop/:category/:subcategory' element={<Shop/>}/>

        {/* Admin Routes */}
        <Route path='/admin/login' element={<Login/>}/>
        <Route path='/admin/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
