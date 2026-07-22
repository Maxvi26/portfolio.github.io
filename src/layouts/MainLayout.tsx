import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;