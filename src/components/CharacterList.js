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
    const [load, setLoad] = useState(false);
    let placeholder = 'Seach by Character';
  useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => setData(response.data.results.filter(
            char => char.name
                .toLowerCase()
                .includes(query.toLowerCase()),
                setTimeout(()=>setLoad(true), 1000)
        )))
        .catch(error => console.log(error))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [page, query, load]);

  return (
    
    <Section className="character-list">
        {
        (load===false)?
        <div><img src='https://media.giphy.com/media/gJ2TzwqdRoKoZ0KWhW/giphy.gif'/></div>:
        <>
            <H3>Make sure to hit next page during your search!</H3>
            <SearchForm setQuery={setQuery} placeholder={placeholder}/>
            <Button onClick={e => (setLoad(false), setTimeout(()=>(page !== 4)?setPage(page + 1):setPage(1), 1000))}>Next Page</Button>
            {data.map(char => <CharacterCard key={char.id} character={char} />)}
            <Button onClick={e => (setLoad(false), setTimeout(()=>(page !== 4)?setPage(page + 1):setPage(1), 1000))}>Next Page</Button>
        </>
        }
    </Section>
  );
}
