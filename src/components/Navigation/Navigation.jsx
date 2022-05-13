import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

function Navigation() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return <div>
        {isLoggedIn && <nav className={s.Navigation}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
        </nav>}
        
    </div>
    
}
export default Navigation;