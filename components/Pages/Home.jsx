import React from 'react'
import { GrPlay } from 'react-icons/Gr'

const Home = () => {
    return (
        <>
            <section className='bg-secondary' style={{ marginTop: '3.7rem' }}>
                <ul className='list-group text-md-center'>
                    <li><h1 className='list-group-items mt-1 display-1 text-white' style={{ fontFamily: 'italic', fontSize: '7rem' }}>The Generics</h1></li>
                    <li><button className='list-group-items btn btn-outline-info p-3 display-4 text-white' style={{ fontSize: '30px' }}>Get our Latest Album</button></li>
                    <li><button className='list-group-items btn btn-outline-info p-3 rounded-circle m-4 text-white'><GrPlay size={'45px'} /></button></li>
                </ul>
            </section>
            <section>
                <div className="container m-auto mt-5">
                    <h1 style={{ fontFamily: 'italic' }} className='text-center text-uppercase shadow rounded-pill'>Tours</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mt-5'>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                                <div className="d-flex justify-content-center align-content-center gap-4 p-3" style={{ borderBottom: '2px solid black' }} >
                                    <span className="h4 font-monospace">JUL16</span>
                                    <span className="h6">DETROIT, MI</span>
                                    <span className="h6">DTE ENERGY MUSIC THEATRE</span>
                                    <button className="h6 btn btn-outline-info">BUY TICKETS</button>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </section>
            <footer className='bg-info overflow-hidden'>
                <h1 className='list-group-items mt-1 display-1 text-white p-4' style={{ fontFamily: 'italic' }}>The Generics</h1>
            </footer>
        </>
    )
}

export default Home;
