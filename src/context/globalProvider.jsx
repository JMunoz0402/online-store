import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    
    const [cart, setCart] = useState([]);
    const [user,setUser] = useState({name: "Jesus",id:123445});

    function addToCart(prod){
        // add prod to cart state variable
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeFromCart(){
        console.log("Removing from cart...");
    }

    function clearCart(){
        console.log("Cart cleared!")
    }
    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;