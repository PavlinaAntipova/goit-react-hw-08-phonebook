import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";

import s from './UserMenu.module.css';


const URL =
    'https://cdn.pixabay.com/photo/2021/02/24/20/38/cat-6047457_1280.png';
  
function UserMenu() {
    const userName = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();

    return (
    <div className={s.UserMenu}>
        <img className={s.avatar} src={URL} alt="" width="32" />
            <span >{`Welcome, ${userName}`}</span>
        <button className={`button ${s.btn}`} type="button" onClick={()=> {dispatch(logout())}}>
        Logout
        </button>
  </div>
    )
}
export default UserMenu;