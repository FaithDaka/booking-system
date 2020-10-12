import React from 'react'
import Footer from './Footer'
import HeroSection from './HeroSection'

const index = ({ children }) => {
    return (
        <div>
            <HeroSection />
            <div>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default index;
