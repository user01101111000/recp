import {FC, JSX, useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import useTheme from "../hooks/common/useTheme.tsx";
import Navbar from "../components/ui/Navbar.tsx";
import Footer from "../components/ui/Footer.tsx";


const HomeLayout: FC = (): JSX.Element => {
    const {pathname} = useLocation();
    const {theme} = useTheme()

    useEffect((): void => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return <main className="home_layout" data-theme={theme}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
}

export default HomeLayout;