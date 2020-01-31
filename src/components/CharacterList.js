import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1em
    text-align: center;
    align-items: center;
`
const Button = styled.button`
    color: pink;
    background-color: rgba(0, 255, 0, 10%);
    margin: 1em;
`
const H3 = styled.h3`
    color: pink;
    margin: 0;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    let placeholder = 'Seach by Character';
  useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => setData(response.data.results.filter(
            char => char.name
                .toLowerCase()
                .includes(query.toLowerCase())
        )))
        .catch(error => console.log(error))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [page, query]);

  return (
    <Section className="character-list">
       <H3>Make sure to hit next page during your search!</H3>
        <SearchForm setQuery={setQuery} placeholder={placeholder}/>
        <div><Button onClick={e => (page !== 20)?setPage(page + 1):setPage(1)}>Next Page</Button></div>
        {data.map(char => <CharacterCard key={char.id} character={char} />)}
        <div><Button onClick={e => (page !== 4)?setPage(page + 1):setPage(1)}>Next Page</Button></div>
    </Section>
  );
}
