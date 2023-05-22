import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../../store/CartContext'
import cartElements from './cartElement'


const Product = () => {
    const { dispatch } = useContext(CartContext);
    const addCartHandler = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }
    return (
        <>
            {
                cartElements.map((item, i) => {
                    return (
                        <div key={i} className="col-md-4 mb-4 d-flex justify-content-center">

                            <Card className='shadow border-0' style={{ width: '500px', height: '500px' }}>
                                <Card.Title className='text-center p-2' style={{ fontFamily: 'fantasy' }}>{item.title}</Card.Title>
                                <div className="card-img-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={item.imageUrl}
                                        alt="Album 1"
                                        className="card-img-top img-fluid hover-scale"
                                    />
                                </div>
                                <Card.Body className="d-flex justify-content-around align-content-center">
                                    <Card.Text style={{ fontWeight: '700' }}>Price: ${item.price}</Card.Text>
                                    <Button variant="primary" onClick={() => addCartHandler(item)}>ADD TO CART</Button>
                                </Card.Body>
                            </Card>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Product;
