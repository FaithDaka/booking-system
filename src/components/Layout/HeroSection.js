import React from 'react'

const HeroSection = () => {
    return (
        <div className="container-fluid hero">
            <div className="col-12">
                <div className="hero-banner">
                    
                <div className="hero_lg">
                        <img src="/images/logo.png" alt="kmc"></img>
                        <span>
                            Kansanga <br /> Miracle center
                        </span>
                    </div>
                    
                    <div className="img-container">
                        <div className="img-content">
                            <div className="left">
                                <h2>
                                    Don't <br/>miss <br/>any service.
                                </h2>
                            </div>
                            <div className="logo-container">
                                <img src="/images/logo.png" alt="logo"/>
                            </div>
                        </div>
                        <p>
                        - Never give up until the battle is over -
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
