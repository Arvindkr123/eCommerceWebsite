import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastContainer />
        <App />
    </React.StrictMode>
)