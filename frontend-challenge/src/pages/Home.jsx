import React, { useState, useEffect } from 'react';
import { Box, Card, Button, Column, Columns } from 'bumbag';

import CharacterCard from '../components/CharacterCard/CharacterCard';
import api from '../api/api';

async function populate_character_cards() {

    const characters = await api.fetch_characters_at_page(1);    
    const characterCards = [];

    for (let character of characters.results) {
        var card = {
            name: character.name,
            id: character.id,
            image: character.image,
            location: character.location,
            status: character.status
        }
        characterCards.push(card);
    }

    return characterCards
}

export default function Home() {
    const [characterCards, setCharacterCards] = useState([]);
    const card_column_spread = 5;

    /* calls function that retrieves api data */
    useEffect(async () => { 
        const cards = await populate_character_cards()
        setCharacterCards(cards)
    },[]);

    /* iterates through objects in state, and creates a new card for each object */
    return (
        <Box alignX="center" backgroundColor="primary">
            <Box width="80%">        
                <Columns alignX="center">
                    {characterCards.map(card => (
                        <Column key={card.name} spread={card_column_spread} height="250px">
                            <CharacterCard
                                title={card.name}
                                id={card.id}
                                image={card.image}
                                location={card.location}
                                status={card.status}
                            />
                        </Column>
                    ))}
                </Columns>
            </Box> 
        </Box>


    );
}
