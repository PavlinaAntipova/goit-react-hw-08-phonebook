import { Outlet } from "react-router-dom";
import AppBar from '../AppBar';

function Layout() {
    return (
        <>
            <AppBar />
            <Outlet/>
        </>
    )
}

export default Layout;