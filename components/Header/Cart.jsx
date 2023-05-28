import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/CartContext";

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const removeCartHandler = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    }
    const [totalAmount, setTotalAmount] = useState(state.totalAmount);
    console.log(totalAmount)

    useEffect(() => {
        setTotalAmount(state.totalAmount);
    }, [state.totalAmount]);

    const clearCartHandler = () => {
        dispatch({ type: 'CLEAR_CART' });
    }
    return (
        <section>
            <div className="container">
                <div className="row justify-content-between align-content-center">
                    <div className="col">
                        <p className="text-uppercase" style={{ fontSize: '30px', fontFamily: 'italic', borderBottom: '1px solid black' }}>Item</p>
                    </div>
                    <div className="col">
                        <p className="text-uppercase" style={{ fontSize: '30px', fontFamily: 'italic', borderBottom: '1px solid black' }}>Title</p>
                    </div>
                    <div className="col">
                        <p className="text-uppercase" style={{ fontSize: '30px', fontFamily: 'italic', borderBottom: '1px solid black' }}>Price</p>
                    </div>
                    <div className="col">
                        <p className="text-uppercase" style={{ fontSize: '30px', fontFamily: 'italic', borderBottom: '1px solid black' }}>Quantity</p>
                    </div>
                </div>

                {state.cartItems.length > 0 ? state.cartItems.map((item) => {
                    return (
                        <div className="row" key={item.id}>
                            <div className="col p-2" style={{ borderBottom: '2px solid black' }}>
                                <li className="list-group-item">
                                    <img className="img-thumbnail w-100" src={item.imageUrl} />
                                </li>
                            </div>
                            <div className="col p-2" style={{ borderBottom: '2px solid black' }}>
                                <li className="list-group-item">
                                    {item.title}
                                </li>
                            </div>
                            <div className="col p-2" style={{ borderBottom: '2px solid black' }}>
                                <li className="list-group-item">
                                    {item.price}
                                </li>
                            </div>
                            <div className="col p-2" style={{ borderBottom: '2px solid black' }}>
                                <li className="list-group-item">
                                    <span className="text-dark d-flex justify-content-evenly align-content-around">
                                        <input className="w-25" type="text" placeholder={item.quantity} />
                                    </span>
                                    <button className="btn btn-danger m-2" onClick={() => removeCartHandler(item)}>Remove</button>
                                </li>
                            </div>
                        </div>
                    )
                }) : <h5 className="text-white bg-danger text-center  shadow rounded-4">Cart is Empty</h5>}
                <p className="text-dark  bg-secondary rounded-3 mt-3 text-center">Total Amount <span className="bg-dark text-white px-2">$ {totalAmount}</span></p>
                <button onClick={clearCartHandler} className="btn btn mt-1 text-uppercase bg-black text-white">Clear Cart</button>
            </div>
        </section>
    )
}

export default Cart;

