import { createContext } from "react";

//it's a promise /interface
//a  description of the data structure
//but not implemantation

const GlobalContext = createContext({
    cart:[],
    user: {},

    addToCart: () => [],
    removeFromCart: () => [],
    clearCart: () => []

});

export default GlobalContext;