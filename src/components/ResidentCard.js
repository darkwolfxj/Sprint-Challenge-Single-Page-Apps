import React, {useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'

export default function ResidentCard(props){
    const [resident, setResident] = useState('');
    
        axios
            .get(`${props.resident}`)
            .then(response => setResident(response.data))
            .catch(error => console.log(error))
    return (
    <p key={resident.id}><NavLink to={`/characters/${resident.id}`}>{resident.name}</NavLink></p>        
    )
}