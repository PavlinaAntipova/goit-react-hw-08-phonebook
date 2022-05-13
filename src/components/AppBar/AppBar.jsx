import Navigation from "components/Navigation";
import AuthNav from "components/AuthNav";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";

import s from './AppBar.module.css';

function AppBar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <>
            {isLoggedIn ? <div div className={s.AppBar}>
                <Navigation />
                <UserMenu />
            </div> : <AuthNav />}
            
        </>
        
    )
}
export default AppBar;