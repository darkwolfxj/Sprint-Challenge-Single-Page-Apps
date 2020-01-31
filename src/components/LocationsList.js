import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import SearchForm from './SearchForm';
import LocationCard from './LocationCard';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 100%;
`
const Button = styled.button`
    color: pink;
    background-color: rgba(0, 255, 0, 25%);
    margin: 1em;
`
const H3 = styled.h3`
    color: pink;
`

export default function LocationsList() {
    
    let placeholder = 'Search by Location'
    const [query, setQuery] = useState('')
    const [locations, setLocations] = useState([])
    const [page, setPage] = useState(1)
    const [load, setLoad] = useState(false)
    
    useEffect(
    () =>  {axios
            .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
            .then(response => {
                setLocations(response.data.results.filter(
                    char => char.name
                        .toLowerCase()
                        .includes(query.toLowerCase()), setTimeout(() => setLoad(true), 1000)
            ))})
            .then(error => console.log('There was an error with location fetching', error))
    }, [page, query])
    return ( 
        <Div>
            <H3>Make sure to hit next page during your search!</H3>
            <div><SearchForm setQuery={setQuery} placeholder={placeholder}/></div>
            <div><Button onClick={e => (setLoad(false), setTimeout(()=>(page !== 4)?setPage(page + 1):setPage(1), 3000))}>Next Page</Button></div>
            {locations.map(place => <LocationCard place={place} key={place.id}/>)}
            <div><Button onClick={e => (setLoad(false), setTimeout(()=>(page !== 4)?setPage(page + 1):setPage(1), 3000))}>Next Page</Button></div>
        </Div>
                
    )
}
