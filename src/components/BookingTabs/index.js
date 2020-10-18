import React, { useState } from 'react';
import BookingTab from '../BookingTab';
import Moddal from '../Modal';
import UserDetails from '../UserDetails';
import './styles.css';

const BookingTabs = () => {
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    }
    const closeModal = () => setShow(false);

    return (
        <div className="bookingtabs">
            <div className="bookingtabs__header">
                <h3>Today's Services</h3>
            </div>
            <Moddal show={show} close={closeModal} title="Fill in the Required Fields">
                <UserDetails close={closeModal} />
            </Moddal>
            <div className="bookingtabs__tabs">
                <BookingTab openModal={openModal} />
                <BookingTab openModal={openModal} />
                <BookingTab openModal={openModal} />
            </div>
        </div>
    )
}

export default BookingTabs
