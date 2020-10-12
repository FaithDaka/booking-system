import React from 'react';
import BookingTab from '../BookingTab';
import './styles.css';

const BookingTabs = () => {
    return (
        <div className="bookingtabs">
            <div className="bookingtabs__header">
                <h3>Today's Services</h3>
            </div>
            <div className="bookingtabs__tabs">
                <BookingTab />
                <BookingTab />
                <BookingTab />
            </div>
        </div>
    )
}

export default BookingTabs
