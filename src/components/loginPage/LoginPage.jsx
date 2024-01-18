import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.scss";
import logoImg from "../../lendSqr_img/lendsqr-logo.svg";
import loginImg from "../../lendSqr_img/pablo-sign-in.svg";
import { Link } from 'react-router-dom';




const LoginPage = () => {

    const [email,SetEmail] = useState('');
    const [password, SetPassword] = useState('');


    const handleEmail = (e) => {
        SetEmail(e.target.value)
    }
    const handlePassword = (e) => {
        SetPassword(e.target.value)
    }
    const navigate = useNavigate();

    const handleLogin = () => {

        if(email === 'test@gmail.com' && password === 'test123@') {
            navigate('/dashboard')
        } else {
            alert('Incorrect user details')
        }
    }

  return (
    <>
    <div className='logo'>
        <img src={logoImg} alt="lendSqr" />
    </div>
    <div className="login-items">
        <div className="login-left">
            <img src={loginImg} alt="LoginImg" />
        </div>
        <div className="login-right">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form action="#">
                {/* <div className="error-auth">
                    <span>Incorrect login credentials</span>
                </div> */}
                <div className="form-header">
                    <div className="form-subheader-email">
                        <input
                        type="email"
                        placeholder="email address"
                        id='email'
                        value={email}
                        onChange={handleEmail}
                        required />
                        <span className="error-message">This field is required</span>
                    </div>
                    <div className="form-subheader-password">
                        <input
                        type="password"
                        placeholder="password"
                        id="password"
                        value={password}
                        onChange={handlePassword}
                        required />
                        <span className="pass-status">hide</span>
                        <span className="error-message">This field is required</span>
                    </div>
                </div>
                <div className="form-links">
                    <span className="forget-btn">
                        <Link className='link' to="">Forget password?</Link>
                    </span>
                    <span className="sign-up-btn">
                        <Link className='link' to="">Sign up</Link>
                    </span>
                </div>
                <button onClick={handleLogin} className="login-btn">log in</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginPage