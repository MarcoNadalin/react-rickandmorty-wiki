import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom"

import { PageContent, Heading } from 'bumbag';

import api from "../api/api"

/* calls function from api class which retrieves character info from api based on id */
async function get_character_info(character_id) {

    const characters = await api.fetch_character_by_id(character_id)
    
    return characters;
}

export default function Character(props) {
    /* state to store current character  */
    const [character, setCharacter] = useState([]);
    /* hook to use search params in url */
    let [searchParams, setSearchParams] = useSearchParams()

    const character_id = searchParams.get("id")

    /* calls function that retrieves api data */
    useEffect(async () => { 
        const current_character = await get_character_info(character_id)
        setCharacter(current_character)
    },[]);

    console.log(character)

    return (
        <PageContent backgroundColor="primary">
            <Heading>
                {character.name}
            </Heading>
        </PageContent>
    );
}
