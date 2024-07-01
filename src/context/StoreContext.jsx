import { createContext, useEffect, useState } from "react";

import { food_list } from "../food del assets/frontend_assets/assets";
export const StoreContext = createContext(null)

const  StoreContextProvider = (props) => {
     
    const [cartItems,setCartItems] = useState({});
    
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => {
                return {
                    ...prev,
                    [itemId]: 1
                }
            })
        }   
        else {
            setCartItems((prev) => {
                return {
                    ...prev,
                    [itemId]: prev[itemId] + 1
                }
            })
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            return {
                ...prev,
                [itemId]: prev[itemId] - 1
            }
        })
    }
    useEffect(() => {
        console.log("cartItems",cartItems);
    },[cartItems])
    const contextValue = {
          food_list,
          cartItems,
          addToCart,
          removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
    
export default StoreContextProvider;