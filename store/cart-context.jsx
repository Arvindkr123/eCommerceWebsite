import { createContext } from "react";


const cartContext = createContext({
    items: [],
    addItems: () => { },
    removeItem: () => { },
    totalAmount:0
})

export default cartContext;