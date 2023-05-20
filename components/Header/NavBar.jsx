import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
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
            </ul>
            <Link to='/store' variant='secondary' onClick={toggleSidebar} className="nav-link text-white" style={{ padding: '5px', marginRight: '50px' }}>
              <TfiShoppingCartFull size={'60px'} /> 4
            </Link>
          </div>
        </div>
      </nav>

      <Offcanvas show={showSidebar} onHide={handleCloseSidebar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase text-center bg-warning p-3 rounded-4 shadow' style={{ fontFamily: 'cursive', fontSize: '30px' }}>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className='text-center bg-info rounded-3 font-monospace shadow'>All Cart items here below </p>
          <ul className='list-group-horizontal d-flex justify-content-between align-content-center'>
            <li className=' p-1 text-uppercase font-monospace list-group-item' style={{ borderBottom: "2px solid black" }}>Item</li>
            <li className=' p-1 text-uppercase font-monospace list-group-item' style={{ borderBottom: "2px solid black" }}>price</li>
            <li className=' p-1 text-uppercase font-monospace list-group-item' style={{ borderBottom: "2px solid black" }}>quantity</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;