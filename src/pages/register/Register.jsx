import "./register.css"

function Register() {
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
                <input type="text" className="loginInput" placeholder="UserName"/>

                <input type="password" className="loginInput" placeholder="Password"/>
                <input type="password" className="loginInput" placeholder="Reenter Password"/>

                <button className="loginButton">Log In</button>
                <span className="loginForgot">Log into Your Account.</span>
               
               </div>
            </div>
        </div>
    </div>
  )
}

export default Register