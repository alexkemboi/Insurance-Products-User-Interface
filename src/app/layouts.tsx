import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SideBarComponent from "@/components/SideBarContainer";
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='w-full xs:flex-col md:w-full md:flex md:justify-between '>
                <div className='w-1/5 md:block'>
                    <SideBarComponent />
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto h-full w-4/5 mt-20 bg-[#F5F5F5]">
                    <div className="flex-1 flex flex-col">
                        {children}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Layout;
