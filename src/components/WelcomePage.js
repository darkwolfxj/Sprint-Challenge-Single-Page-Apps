import React from "react";
import styled from 'styled-components';

const Img = styled.img`
    position: relative;
    left: 25%;
    width: 50%;
    height: 50%;
`
const H1 = styled.h1`
    color: pink;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <H1>Welcome to the ultimate fan site!</H1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
