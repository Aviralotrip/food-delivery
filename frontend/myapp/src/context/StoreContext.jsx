import { createContext, useEffect, useState } from "react";

import { food_list } from "../food del assets/frontend_assets/assets";
export const StoreContext = createContext(null)
import axios from "axios";
const  StoreContextProvider = (props) => {
     
    const [cartItems,setCartItems] = useState({});
    const url = 'http://localhost:4000';
    const [token,setToken] = useState('');
    const [food_list,setFoodList] = useState([]);
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
    
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
        if(cartItems[item] > 0) {
           let itemInfo = food_list.find((product)=> product._id === item);
           totalAmount += cartItems[item] * itemInfo.price;
        }
    }
    return totalAmount;
}
const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
  
    setFoodList(response.data.data);
}
useEffect(() => {
    fetchFoodList();
}, [])
useEffect(() => {
    
    async function loadData() {
        await fetchFoodList();
        if(localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }
    loadData();
}, [])

    const contextValue = {
          food_list,
          cartItems,
          addToCart,
          removeFromCart,
          getTotalCartAmount,
          url,
          token,
          setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
    
export default StoreContextProvider;