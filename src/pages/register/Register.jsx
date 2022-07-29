import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./register.css"

function Register() {
  const navigate = useNavigate();

  const email=useRef()
  const username=useRef()
  const password=useRef()
  const passwordre=useRef()

  const handleForm=(e)=>{
    e.preventDefault()
    if(password.current.value!==passwordre.current.value){
      passwordre.current.setCustomValidity("Password not matched")
    }
    else{
      const user={
        username:username.current.value,
        password:username.current.value,
        email:username.current.value
      }
      
      try {
        
        axios.post("http://127.0.0.1:8000/api/auth/register",user)
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
         
    
    }
  }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Tweak</h3>
               <span className="loginDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae, quas sed ut itaque quidem?</span>
            </div>
            <div className="loginRight">
               <form className="loginBox" onSubmit={handleForm}>
               
                <input type="email" ref={email} className="loginInput" placeholder="Email"  autoComplete="false"/>
                <input type="text" ref={username} className="loginInput" placeholder="UserName" autoComplete="false"/>

                <input type="password" ref={password} className="loginInput" placeholder="Password" autoComplete="false"/>
                <input type="password" ref={passwordre} className="loginInput" placeholder="Reenter Password" autoComplete="false"/>

                <button className="loginButton" type="submit">Sign Up </button>
                <span className="loginForgot">Log into Your Account.</span>
               
               </form>
            </div>
        </div>
    </div>
  )
}

export default Register