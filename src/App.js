import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import styled from 'styled-components';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import Character from './components/Character';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
            <Route path='/locations'>
                <Div><LocationsList /></Div>
            </Route>
            <Route path='/characters/:id' render={props => <Character {...props}/>} />
            <Route path='/characters'>
                <Div><CharacterList /></Div>
            </Route>
            <Route path='/'>
                <WelcomePage />
            </Route>
        </Switch>
    </main>
  );
}
