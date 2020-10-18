import firebase from '../../firebase'
import React, { useEffect, useState } from 'react'


const Fetch =()=>{
    const [data, setData] = useState([]);

    const fetchData=()=>{
        firebase
        .firestore()
        .collection('user_details')
        .onSnapshot((snap)=>{
            const newData = snap.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            
            }))
            setData(newData);
        })
        return()=>fetchData();
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const detail = fetchData()

    return(
        <div>
            {
                data.map((detail)=>(
                    <ul key={detail.id}>
                        <li> {detail.name} </li>
                        <li> {detail.location} </li>
                        <li> {detail.contact} </li>
                    </ul>
                ))
            }
            
        </div>
    )
}

export default Fetch;
