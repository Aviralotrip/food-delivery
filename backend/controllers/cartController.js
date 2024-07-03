import userModel from "../models/userModel.js";



//write three methods
//1. add to cart
//2. remove from cart
//3. get cart items

//add to cart
const addToCart = async (req, res) => {
try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1;
    }else{
        cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: cartData });
    res.json({ success: true, message: "Item added to cart successfully" });
} catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
}

}



//remove from cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Item removed from cart successfully" });    
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server error" });
    }
}



//get cart items

const getCart = async (req, res) => {

try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
} catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
}

}



export { addToCart, removeFromCart, getCart }