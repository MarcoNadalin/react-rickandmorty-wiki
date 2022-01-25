import React, { useState, useEffect } from 'react';
import { PageContent, Card, Button } from 'bumbag';

import CharacterCard from '../components/CharacterCard/CharacterCard';
import api from '../api/api';

async function fetch_characters_at_page() {
    /* calls function that retrieves api data */
    const data = api.fetch_characters_at_page(1);
    //console.log(data)
}

async function populate_character_cards() {
    //data.results is where all the objects are
    const characters = await api.fetch_characters_at_page(1);    

    const characterCards = [];

    for (let character of characters.results) {
        const card = (
          <CharacterCard title={character.name}> info about {character.name} </CharacterCard>
        );
        characterCards.push(card);
    }

    return characterCards
}

export default function Home() {
    const [characterCards, setCharacterCards] = useState([]);

    /* calls function that retrieves api data */
    useEffect(async () => { 
        //const data = await api.fetch_characters_at_page();
        //console.log(data.results)
        const cards = await populate_character_cards()
        setCharacterCards(cards)
    });

    return (
        <PageContent>        
            <CharacterCard title="test"> here is some text in the card </CharacterCard>
            {characterCards}
        </PageContent>

    );
}
