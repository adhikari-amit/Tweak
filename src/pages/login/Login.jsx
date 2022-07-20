import "./login.css"

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">Tweak</h3>
               <span className="loginDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae, quas sed ut itaque quidem?</span>
            </div>
            <div className="loginRight">
               <div className="loginBox">
                <input type="email" className="loginInput" placeholder="Email"/>
                <input type="password" className="loginInput" placeholder="Password"/>
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button> 
               </div>
            </div>
        </div>
    </div>
  )
}

export default Login