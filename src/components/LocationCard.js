import React from "react";
import styled from 'styled-components';

import ResidentCard from './ResidentCard';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid black;
    margin: 1em;
    background-color: rgba(0, 255, 0, 25%);
    color: pink;
    width: 50%;
`

export default function LocationCard(props) {
  return (
    <Div key={props.place.id}>
        <h2>{props.place.name}</h2>
        <p>Type: {props.place.type}</p>
        <p>Dimension: {props.place.dimension}</p>
        <div>Residents: {props.place.residents.map(resident => <ResidentCard resident={resident} />)}</div>
    </Div> 
  )
}
