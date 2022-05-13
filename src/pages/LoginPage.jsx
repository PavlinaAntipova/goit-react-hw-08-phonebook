import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from '../redux/auth/auth-operations';

import s from './pages.module.css';

export default function LoginPage() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <h2>Login</h2>
        <form className={s.form} onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ password, email }));
            setPassword('');
            setEmail('');
        }}>
            <label> Email
                <input type="email" name='email' value={email} placeholder='wait your email' onChange={e => setEmail(e.target.value) }/>
            </label>
            <label> Password
                <input type="password" name='password' value={password} placeholder='wait your password' onChange={e => setPassword(e.target.value) }/>
            </label>
            
            <button type="submit" className='button'>Sign in</button>
            </form>
            </>
    )
}