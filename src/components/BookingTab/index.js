import React from 'react';
import './styles.css';

const BookingTab = ({ openModal }) => {
    return (
        <div className="bookingTab">
            <div className="tabs__options">
                <div className="top__section">
                    <div className="left__area">
                        <div className="period">
                            <h3 className="date">09</h3>
                            <div className="month">Oct</div>
                        </div>
                    </div>
                    <div className="center__area">
                        <h3>Special Sunday Service(Morning)</h3>
                        <p>15 seats available</p>
                    </div>
                </div>
                <div className="right__area">
                    <button className="btn" onClick={openModal}>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default BookingTab;
