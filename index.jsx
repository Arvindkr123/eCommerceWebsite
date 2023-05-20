import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import CartProvider from './store/CartProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
    </CartProvider>
)