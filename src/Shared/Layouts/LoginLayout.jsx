import './LoginLayout-style.css'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import App from '../../App'

const LoginLayout = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const verify = (e) => {
        e.preventDefault();
        
        if (email === process.env.USER && password === process.env.PASSWORD) {
            console.log('Login Sucess')
            setEmail('')

        } else {
            console.log('login Failed')
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className="login-layout">
            <div className="login-header">
                <h2>UEP ADMIN PORTAL</h2>
            </div>

            <div className="login-card">
                <img src="src/assets/UEP LOGO.png" alt="UEP LOGO.png" />
                <h2>ADMIN LOGO</h2>

                <form onSubmit={verify}>
                    <div className="username">
                        <img src="src/assets/icons/user_30px.png" alt="user_30px.png" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="username" id="username" placeholder="Enter username..." required />
                    </div>
                    <div className="user-password">
                        <img src="src/assets/icons/lock_30px.png" alt="lock_30px.png" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Enter password..." required />
                    </div>

                    <div className="formBtn">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginLayout;