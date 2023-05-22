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
            // Check if the product already exists in the cart
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

                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                // If the product doesn't exist, add it to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
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
