import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ResidentCard from './ResidentCard';

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

export default function Location(props){

    return (
        <Div>
            test
        </Div> 
    )
}