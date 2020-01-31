import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
    color: pink;
    background-color: rgba(0, 255, 0, 25%);
    border: 1px solid black;
    margin: 1em;
    width: 50%;
    text-align: center;
    position: relative;
    left: 24%;
`


export default function Character(props){
    const [resident, setResident] = useState({})
    const [location, setLocation] = useState({})
     useEffect(()=> {
            axios
            .get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(res => {setResident(res.data); setLocation(res.data.location)})
            .catch(err => console.log('There was an error fetchuing data at Character', err))
    }  
    ,[])  
       
    return (
        <Div> 
            <h3>{resident.name}</h3>
            <img src={resident.image}/>
            <p>Status: {resident.status}</p>
            <p>Species: {resident.species}</p>
            <p>Location: {location.name}</p> 
            {console.log('This is location', resident.location)}
        </Div>
    )
}