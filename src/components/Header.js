import React from "react";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 1em;
`
const H1 = styled.h1`
    color: pink;
`

export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
      <Div>
        <NavLink to='/characters'>Characters</NavLink>
        <NavLink to='/locations'>Locations</NavLink>
        </Div>
    </header>
  );
}
