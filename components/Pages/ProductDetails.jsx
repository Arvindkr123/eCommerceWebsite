import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import cartElements from './cartElement';
import { ImYoutube, ImSpotify } from 'react-icons/im';
import { SiFacebook } from 'react-icons/si';
import { CartContext } from '../../store/CartContext';
import ImageZoom from 'react-image-zoom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { dispatch } = useContext(CartContext);
    const addCartHandler = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    useEffect(() => {
        const fetchProductDetails = () => {
            const foundProduct = cartElements.find(item => item.id === Number(id));
            setProduct(foundProduct);
        };

        fetchProductDetails();
    }, [id]);

    return (
        <>
            <section style={{ marginTop: '8rem' }}>
                {product ? (
                    <div className="container py-2 shadow text-center">
                        <div className="row my-5">
                            <div className="col d-flex justify-content-center gap-3 flex-column">
                                <h2 className='shadow text-center' style={{ fontFamily: 'Operator Mono' }}>{product.title}</h2>
                                <h2 className='shadow text-center'>Price ${product.price}</h2>
                                <h2 className='shadow text-center'>Quantity {product.quantity}</h2>
                                <div>
                                    <button className='btn shadow btn-warning h3' onClick={addCartHandler}>Add to Cart</button>
                                </div>
                            </div>
                            <div className="col-md-6 w-500 h-100 text-center">
                                <ImageZoom
                                    zoomImage={{
                                        src: product.imageUrl,
                                        alt: 'product'
                                    }}
                                    image={{
                                        src: product.imageUrl,
                                        alt: 'product',
                                        className: 'img-fluid w-100',
                                        style: { maxHeight: '400px' }
                                    }}
                                    zoomProps={{
                                        width: 400,
                                        height: 400
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
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

export default ProductDetails;
