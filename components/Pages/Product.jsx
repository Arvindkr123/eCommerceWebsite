import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { CartContext } from '../../store/CartContext'

const cartElements = [
    {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        id: 2,
        title: 'Black and White Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        id: 3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    },
    // Additional items...
    {
        id: 4,
        title: 'Blue Shades',
        price: 80,
        imageUrl: 'https://images.pexels.com/photos/16796662/pexels-photo-16796662/free-photo-of-wood-restaurant-street-house.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 2,
    },
    {
        id: 5,
        title: 'Vintage Collection',
        price: 120,
        imageUrl: 'https://images.pexels.com/photos/15155648/pexels-photo-15155648/free-photo-of-boats-on-the-beach-below-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 1,
    },
    {
        id: 6,
        title: 'Red Passion',
        price: 90,
        imageUrl: 'https://images.pexels.com/photos/15155648/pexels-photo-15155648/free-photo-of-boats-on-the-beach-below-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 4,
    },
    {
        id: 7,
        title: 'Green Vibes',
        price: 60,
        imageUrl: 'https://images.pexels.com/photos/15155648/pexels-photo-15155648/free-photo-of-boats-on-the-beach-below-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 2,
    },
    {
        id: 8,
        title: 'Monochrome Magic',
        price: 70,
        imageUrl: 'https://images.pexels.com/photos/15155648/pexels-photo-15155648/free-photo-of-boats-on-the-beach-below-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 3,
    },
    {
        id: 9,
        title: 'Pastel Delight',
        price: 95,
        imageUrl: 'https://images.pexels.com/photos/15155648/pexels-photo-15155648/free-photo-of-boats-on-the-beach-below-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 1,
    },
    {
        id: 10,
        title: 'Abstract Art',
        price: 110,
        imageUrl: 'https://images.pexels.com/photos/16872664/pexels-photo-16872664/free-photo-of-summer-garden-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 2,
    },
    {
        id: 11,
        title: 'Minimalist Collection',
        price: 75,
        imageUrl: 'https://images.pexels.com/photos/16872664/pexels-photo-16872664/free-photo-of-summer-garden-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 3,
    },
    {
        id: 12,
        title: 'Neon Lights',
        price: 85,
        imageUrl: 'https://images.pexels.com/photos/16872664/pexels-photo-16872664/free-photo-of-summer-garden-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 1,
    },
    {
        id: 13,
        title: 'Dreamy Hues',
        price: 100,
        imageUrl: 'https://images.pexels.com/photos/16872664/pexels-photo-16872664/free-photo-of-summer-garden-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 2,
    },
    {
        id: 14,
        title: 'Golden Glow',
        price: 150,
        imageUrl: 'https://images.pexels.com/photos/16872664/pexels-photo-16872664/free-photo-of-summer-garden-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 1,
    },
    {
        id: 15,
        title: 'Rustic Charm',
        price: 95,
        imageUrl: 'https://images.pexels.com/photos/16563220/pexels-photo-16563220/free-photo-of-minimalist-architecture-design.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 4,
    },
    {
        id: 16,
        title: 'Ocean Breeze',
        price: 80,
        imageUrl: 'https://images.pexels.com/photos/16563220/pexels-photo-16563220/free-photo-of-minimalist-architecture-design.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 2,
    },
    {
        id: 17,
        title: 'Natures Palette',
      price: 65,
        imageUrl: 'https://images.pexels.com/photos/16563220/pexels-photo-16563220/free-photo-of-minimalist-architecture-design.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        quantity: 3,
    },
    {
        id: 18,
        title: 'Sunset Serenade',
        price: 120,
        imageUrl: 'https://images.pexels.com/photos/11588267/pexels-photo-11588267.jpeg?auto=compress&cs=tinysrgb&w=600',
        quantity: 1,
    },
    {
        id: 19,
        title: 'Pastel Paradise',
        price: 90,
        imageUrl: 'https://images.pexels.com/photos/11588267/pexels-photo-11588267.jpeg?auto=compress&cs=tinysrgb&w=600',
        quantity: 2,
    },
    {
        id: 20,
        title: 'Mystic Melody',
        price: 100,
        imageUrl: 'https://images.pexels.com/photos/11588267/pexels-photo-11588267.jpeg?auto=compress&cs=tinysrgb&w=600',
        quantity: 3,
    },
];


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
