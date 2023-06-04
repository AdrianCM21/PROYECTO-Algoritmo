
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'


export const Layout = () => {
    return (
        <>
            
            <NavBar/>
            <Outlet />
            <Footer/>
        </>
    )
}
