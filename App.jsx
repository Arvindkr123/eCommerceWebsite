import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Store from './components/Pages/Store.jsx'
import About from './components/Pages/About.jsx'
import NavBar from './components/Header/NavBar'
import { CartProvider } from './store/CartContext'
import Contact from './components/Pages/Contact'
import ProductDetails from './components/Pages/ProductDetails'
import Login from './components/Pages/Login'
import { AuthContextProvider } from './store/AuthContextProvider'
import Protected from './components/Auth/Protected'
const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' exact element={<Protected Component={Home} />} />
                        <Route path='/store' exact element={<Protected Component={Store} />} />
                        <Route path='/store/:id' exact element={<Protected Component={ProductDetails} />} />
                        <Route path='/about' exact element={<Protected Component={About} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/contact' exact element={<Protected Component={Contact} />} />
                    </Routes>
                </CartProvider>
            </AuthContextProvider>
        </BrowserRouter>
    )
}

export default App
