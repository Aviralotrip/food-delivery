import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../food del assets/frontend_assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email'required />
            <input type="password" placeholder='Your password'required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Log In"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required/>
            <p>By Continuing, I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currState==="Login"
       ? <p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
       : <p>Already Have an account?<span onClick={()=>setCurrState("Login")}>Log In here</span></p>
}
      </form>
    </div>
  )
}

export default LoginPopup
