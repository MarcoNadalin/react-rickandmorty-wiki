import React, { useState, useEffect } from 'react';
import { PageContent, Card, Button, Column, Columns } from 'bumbag';

import CharacterCard from '../components/CharacterCard/CharacterCard';
import api from '../api/api';

async function populate_character_cards() {

    const characters = await api.fetch_characters_at_page(1);    
    const characterCards = [];

    for (let character of characters.results) {
        var card = {
            name: character.name,
            id: character.id
        }
        characterCards.push(card);
    }

    return characterCards
}

export default function Home() {
    const [characterCards, setCharacterCards] = useState([]);
    const card_column_spread = 3;

    /* calls function that retrieves api data */
    useEffect(async () => { 
        const cards = await populate_character_cards()
        setCharacterCards(cards)
    },[]);

    /* iterates through objects in state, and creates a new card for each object */
    return (
        <PageContent width="90%">        
            <Columns>
                {characterCards.map(card => (
                    <Column key={card.name} spread={card_column_spread} height="250px">
                        <CharacterCard
                            title={card.name}
                            id={card.id}
                        />
                    </Column>
                ))}
            </Columns>
        </PageContent>

    );
}
