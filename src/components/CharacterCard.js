import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const Div = styled.div`
    color: pink;
    background-color: rgba(0, 255, 0, 25%);
    border: 1px solid black;
    margin: 1em;
    width: 50%;
`


export default function CharacterCard(props) {
    const [location, setLocation] = useState()
    useEffect(()=>{
    axios
        .get(`${props.character.location.url}`)
        .then(res=>(setLocation(res.data), console.log('this is location in props.character.location.url and res.data', props.character.location.url, res.data)))
    }
        , [props.character.location.url])
    return (    
        <Div> 
            <h3>{props.character.name}</h3>
            <img src={props.character.image}/>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            {/* <p> */}
                Location:{console.log('This is location', location)} 
            {/* <NavLink to={`/locations/${location.id}`}>{props.character.location.name}</NavLink></p>  */}
        </Div>
  )
}
