import { NavLink, useLocation } from 'react-router-dom';

import s from './AuthNav.module.css';

function AuthNav() {
    const location = useLocation();
    const isOnHome = location.pathname === '/';

    const classNameByLocation = className => {
 
        if (isOnHome) {
            return s[`${className}OnHome`];
        }
        return s[className];
    }


    return <nav className={classNameByLocation('registration')}>
        <NavLink className={classNameByLocation('signin')} to='/login'>{isOnHome ? 'Sign In' : 'Login'}</NavLink>
        <NavLink className={classNameByLocation('signup')} to='/register'>{isOnHome ? 'Sign Up' : 'Registation' }</NavLink>
    </nav>
}
export default AuthNav;