import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Store from './components/Pages/Store.jsx'
import About from './components/Pages/About.jsx'
import NavBar from './components/Header/NavBar'
import { CartProvider } from './store/CartContext'
import Contact from './components/Pages/Contact'

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/store' exact element={<Store />} />
                    <Route path='/about' exact element={<About />} />
                    <Route path='/contact' exact element={<Contact />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App
