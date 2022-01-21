const api = {
    /* function to get list of characters from api */
    async fetch_characters_at_page(page_number) {
        const response = await fetch('https://rickandmortyapi.com/api/character?page='+{page_number})

        const characters = await response.json();
        console.log(response)

        return(response)
    }
}

export default api;