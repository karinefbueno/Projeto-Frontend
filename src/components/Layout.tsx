import { Outlet } from "react-router-dom";
import Header from "./Header/Index";

function Layout() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
        </>
    )
}
export default Layout;