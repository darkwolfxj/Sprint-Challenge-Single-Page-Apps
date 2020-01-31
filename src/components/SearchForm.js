import React, { useState } from "react";
import styled from 'styled-components';

const Input = styled.input`
    color: pink;
`

export default function SearchForm(props) {
    const handleChanges = e => props.setQuery(e.target.value)
  return (
    <section className="search-form">
     <Input type='text' onChange={handleChanges} placeholder={props.placeholder} />
    </section>
  );
}
