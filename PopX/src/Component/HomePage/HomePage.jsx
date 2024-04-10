import React from 'react'
import {useNavigate} from "react-router-dom"

function HomePage() {
    const navigate = useNavigate();
    
    const goToCreateAccn = () =>{
        navigate("/CreateAccount")
    }
    const gotoSignin = () =>{
        navigate("/Signin")
    }

  return (
    <div className="flex h-screen items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl mb-4">Welcome to PopX</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex">
                <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4" onClick={()=>goToCreateAccn()}>Create Account</button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={()=>gotoSignin()}>Already Registered? Login</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage