import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;

try {
    const user  = await userModel.findOne({ email });
    if (!user) {
        return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.json({ success: false, message: "Incorrect password" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token, user });
} catch (error) {
    console.log(error)
    res.json({ success: false, message: "Server error" });
}
};

//create token

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
}
    );
};


//register user

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
   try {
    //check if user exists
       const exists = await userModel.findOne({ email});
       if(exists){
           return res.json({success:false,message:"User already exists"});

       }

       //validating the email and password
       if(!validator.isEmail(email)){
           return res.json({success:false,message:"Invalid email address"});
       }
       if(password.length < 8){
           return res.json({success:false,message:"Password must be at least 6 characters"});
       }
       //encrypt the password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
       //create a new user
       const newUser = new userModel({
           name,
           email,
           password:hashedPassword
       })

       const user = await newUser.save();
       //generate token
       const token = createToken(user._id);
       res.json({success:true, data:token});
   } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
   }
};





export { loginUser,registerUser };
