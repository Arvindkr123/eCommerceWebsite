import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';
import { CartContext } from '../../store/CartContext';
import AuthContext from '../../store/AuthContextProvider';
import { UserMailContext } from '../../store/UserMailProvider';

const NavBar = () => {
  const { state, dispatch } = useContext(CartContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const mailCtx = useContext(UserMailContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    authCtx.logout();
    mailCtx.logOutMail();
    navigate("/login");
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };
  
  console.log(state.cartItems);

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top text-uppercase">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={logOutHandler} to="/login">{authCtx.isLoggedIn ? 'logout' : 'login'}</Link>
              </li>
            </ul>
            <Link to='/store' variant='secondary' onClick={toggleSidebar} className="nav-link text-white" style={{ padding: '5px', marginRight: '50px' }}>
              <TfiShoppingCartFull size={'60px'} />{state.cartItems.length===0 ? 0: state.cartItems.length}
            </Link>
          </div>
        </div>
      </nav>

      <Offcanvas show={showSidebar} onHide={handleCloseSidebar} placement="end" style={{ width: '600px' }} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase text-center bg-warning p-3 rounded-4 shadow' style={{ fontFamily: 'cursive', fontSize: '30px' }}>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default NavBar;