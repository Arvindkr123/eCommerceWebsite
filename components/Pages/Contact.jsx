import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ImYoutube, ImSpotify } from 'react-icons/im'
import { SiFacebook } from 'react-icons/si'


const Contact = () => {
    // Define state variables

    // Create refs for input elements
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    // Form submit handler
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        };
        try {
            const response = await fetch('https://e-commerce-f32d2-default-rtdb.firebaseio.com/data.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([user])
            });

            if (!response.ok) {
                throw new Error('Failed to post data to the server.');
            }

            nameRef.current.value = '';
            emailRef.current.value = '';
            phoneRef.current.value = '';
            alert('Data sent successfully.....')
        } catch (err) {
            console.error(err)
        }
    }

    // Render the component
    return (
        <>
            <section style={{ marginTop: '9rem' }}>
                <div className='container bg-secondary rounded-4 w-100 h-100 d-flex justify-content-center'>
                    <div className="row p-5">
                        <div className="col">
                            <h1 style={{ fontFamily: 'italic', color: 'indigo' }}>Please Contact Us</h1>
                            <Form className='p-2' onSubmit={onSubmitHandler}>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-1">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" ref={phoneRef} placeholder="Enter your number.." />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="warning" className='mt-2 w-100 text-center' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='bg-info mt-3 h-75 overflow-hidden'>
                <ul className='d-flex justify-content-evenly align-content-center'>
                    <li className='p-5 display-4 list-group-item' style={{ fontFamily: 'italic', color: 'white' }}>The Generics</li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImYoutube size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><ImSpotify size={'60px'} /></a></li>
                    <li className='mt-5 list-group-item'><a href="https://www.youtube.com"><SiFacebook size={'60px'} /></a></li>
                </ul>
            </footer>
        </>
    );
};

export default Contact;
