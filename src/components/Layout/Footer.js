import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='flex-container'>
                <div className='footer_profile'>
                    <img src='/images/pastor.jpeg' alt='pr'/>
                </div>
                <div className='footer_content'>
                    <p>
                        Join Kansanga<br/> miracle center live.
                    </p>
                    <div className='media_icons'>
                        <a className='fa fa-facebook'href='#'> </a>
                        <a className='fa fa-twitter' href='#'> </a>
                        <a className='fa fa-youtube' href='#'> </a>
                        <a className='fa fa-google' href='#'></a>
                        <a className='fa fa-linkedin' href='#'></a>
                    </div>
                </div>
                <div className='large_content'>
                    <p className='quote'>
                    'For he has called us, not to enslave us but to set us free'
                    </p>
                    <span className='quote__'>
                        ~Matt 1:10
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Footer;
