import React, { useState, useEffect } from 'react';
import api from '../api/api';

export default function Home() {

    /* calls function that retrieves api data */
    useEffect(async () => { 
        const data = await api.fetch_characters_at_page(1);
    });

    return <div>        
        <h1> HELLO WORLD! </h1>
    </div>;
}
