import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ImYoutube, ImSpotify } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'
import './store.css'

import { Link } from 'react-router-dom'
const Store = () => {
    return (
        <div style={{ marginTop: '3.7rem' }}>
            <section className='bg-secondary' style={{ paddingBottom: '7rem' }}>
                <h1 style={{ fontSize: '7rem', fontFamily: 'italic' }} className='list-group-items mt-1 text-white text-center '>The Generics</h1>
            </section>

            <section style={{ marginTop: '3rem' }} >
                <div className="container-fluid">
                    <h3 className='h1 text-center' style={{ fontFamily: 'italic' }}>MUSIC</h3>
                    <div className="row mt-5 gap-5 d-flex justify-content-center">
                        <div className="col-md-4">
                            <Card className='shadow border-0' style={{ width: '400px', height: '400px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>Album 1</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: $12.99</Card.Text>
                                    <Button variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className='shadow border-0' style={{ width: '400px', height: '400px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>Album 2</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: $12.99</Card.Text>
                                    <Button variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row mt-5 gap-5 d-flex justify-content-center">
                        <div className="col-md-4">
                            <Card className='shadow border-0' style={{ width: '400px', height: '400px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>Album 3</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: $12.99</Card.Text>
                                    <Button variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className='shadow border-0' style={{ width: '400px', height: '400px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>Album 4</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: $12.99</Card.Text>
                                    <Button variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <h3 className='h1 mt-5 text-center' style={{ fontFamily: 'italic' }}>MERCH</h3>
                    <div className="row mt-5 gap-5 d-flex justify-content-center">
                        <div className="col-md-4">
                            <Card className='shadow border-0' style={{ width: '400px', height: '400px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>T-Shirt</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: $12.99</Card.Text>
                                    <Button variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card className='shadow border-0' style={{ width: '400px', height: '400px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>Coffee Cup</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: $12.99</Card.Text>
                                    <Button variant="primary">ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className="col-12 text-center">
                        <Link to='/store' className='btn btn-outline-primary' style={{ fontSize: '30px' }}>See the cart</Link>
                    </div>
                </div>
            </section>

            <footer className='bg-info mt-3 h-75 overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImYoutube size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.spotify.com"><ImSpotify size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.facebook.com"><SiFacebook size={'60px'} /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Store
