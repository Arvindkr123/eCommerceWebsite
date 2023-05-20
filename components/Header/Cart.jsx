import React from "react";
const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }

]

const Cart = () => {
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

                {cartElements.map((item, i) => {
                    return (
                        <div className="row">
                            <div className="col p-2" style={{borderBottom:'2px solid black'}}>
                                <li className="list-group-item">
                                    <img className="img-thumbnail w-100" src={item.imageUrl} />
                                </li>
                            </div>
                            <div className="col p-2" style={{borderBottom:'2px solid black'}}>
                                <li className="list-group-item">
                                    {item.title}
                                </li>
                            </div>
                            <div className="col p-2" style={{borderBottom:'2px solid black'}}>
                                <li className="list-group-item">
                                    {item.price}
                                </li>
                            </div>
                            <div className="col p-2" style={{borderBottom:'2px solid black'}}>
                                <li className="list-group-item">
                                    {item.quantity}
                                </li>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Cart;

