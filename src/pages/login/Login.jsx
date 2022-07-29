import "./login.css"
import { useContext,useRef } from "react"
import { AuthContext } from "../../context/AuthContext"
import {loginCall} from "../../apiCalls"

function Login() {
  
  const username=useRef()
  const password=useRef()
  const{ isFetching,dispatch}=useContext(AuthContext)
  const handler=(e)=>{
    e.preventDefault()
    loginCall({username:username.current.value,password:password.current.value},dispatch)
  }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Tweak</h3>
               <span className="loginDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae, quas sed ut itaque quidem?</span>
            </div>
            <div className="loginRight">
               <form className="loginBox" onSubmit={handler}>
                <input type="text" ref={username} className="loginInput" placeholder="username" autoComplete="false"/>
                <input type="password" ref={password} className="loginInput" placeholder="Password" autoComplete="false"/>
                <button className="loginButton" >{isFetching? "Loading":"Login"} </button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button> 
               </form>
            </div>
        </div>
    </div>
  )
}

export default Login