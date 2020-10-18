import React, { useState } from 'react';
import firebase from '../../firebase'
import LoadSpinner from '../LoadSpinner';

const UserDetails = ({ close }) => {
    const[name, setName]= useState('');
    const[address, setAddress]=useState('');
    const[contact, setContact]=useState('')
    const[loading, setLoading]=useState(false);
    const time = new Date()


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        firebase
            .firestore()
            .collection('user_details')
            .add({
                name,
                location:address,
                contact,
                time_created:time
            })
            .then(()=>{
                setLoading(false)
                close();
            })
        
    }

    return (
        <div className="card user-modal">
            <div className="card-header" />
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div className="form-group column">
                        <div>
                        <label>Your Name</label>
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="  ...as on national ID"
                        required/>
                        </div>
                        <div>
                        <label>Your Address</label>
                        <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        placeholder="  e.g kiwempe, kansanga"
                        required/>
                        </div>
                        <div>
                        <label>Your Phone Number</label>
                        <input
                        type="text"
                        className="form-control"
                        name="contact"
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                        placeholder="  e.g 0703-XXX-XXX"  
                        required/>
                        </div>
                    </div>
                    <button type="submit" className="btn-lg btn-primary" >
                        {loading ? <LoadSpinner /> : 'Book'}
                    </button>
                    </form>
                </div>
            
        </div>
    )
}

export default UserDetails;
