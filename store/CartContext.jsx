import React, { createContext, useReducer } from 'react';

// Define the initial state of the cart
const initialState = {
    cartItems: [],
    totalAmount: 0,
};

// Create the Cart context
export const CartContext = createContext();

// Define the cart reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProductIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingProductIndex !== -1) {
                // If the product exists, update its quantity
                const updatedCartItems = [...state.cartItems];
                const existingProduct = updatedCartItems[existingProductIndex];

                const updatedProduct = {
                    ...existingProduct,
                    quantity: existingProduct.quantity + action.payload.quantity,
                };

                updatedCartItems[existingProductIndex] = updatedProduct;

                const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.quantity;

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalAmount: updatedTotalAmount,
                };
            } else {
                // If the product doesn't exist, add it to the cart
                const updatedCartItems = [...state.cartItems, action.payload];
                const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.quantity;

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalAmount: updatedTotalAmount,
                };
            }

        case 'REMOVE_FROM_CART':
            const updatedItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            const updatedAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
            return {
                ...state,
                cartItems: updatedItems,
                totalAmount: updatedAmount,
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                totalAmount: 0,
            };
        default:
            return state;
    }
};



// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
