import { NavBar } from '@/components';
import Footer from '@/components/navigation/Footer';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
};

export default MarketingLayout
