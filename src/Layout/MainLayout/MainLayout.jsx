import { Outlet } from "react-router-dom";
import Navbar from "../../ShareItems/Navbar/Navbar";
import Footer from "../../ShareItems/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;