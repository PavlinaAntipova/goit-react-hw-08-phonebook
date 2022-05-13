import { useState } from "react"
import { useDispatch } from "react-redux";
import { registration } from '../redux/auth/auth-operations';

import s from './pages.module.css';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <h2>Registration</h2>
        <form className={s.form} onSubmit={(e) => {
            e.preventDefault();
            dispatch(registration({ name, email, password }));
            setName('');
            setEmail('');
            setPassword('');
        }}>
            <label> Name
                <input type="text" name='name' value={name} placeholder='wait your name' onChange={e => setName(e.target.value) }/>
            </label>
            <label> Email
                <input type="email" name='email' value={email} placeholder='wait your email' onChange={e => setEmail(e.target.value) }/>
            </label>
            <label> Password
                <input type="password" name='password' value={password} placeholder='wait your password' onChange={e => setPassword(e.target.value) }/>
            </label>
            <button type="submit" className='button' >Sign up</button>
            </form>
            </>
    )
}