import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    color: pink;
    background-color: rgba(0, 255, 0, 25%);
    border: 1px solid black;
    margin: 1em;
    width: 50%;
`


export default function CharacterCard(props) {

    return (    
        <Div> 
            <h3>{props.character.name}</h3>
            <img src={props.character.image}/>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            <p>Location: {props.character.location.name}</p> 
        </Div>
  )
}
