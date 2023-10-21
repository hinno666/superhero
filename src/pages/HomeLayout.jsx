import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

export const HomeLayout = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}