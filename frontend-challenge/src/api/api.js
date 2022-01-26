const api = {
    /* function to get list of characters from api */
    async fetch_characters_at_page(page_number) {
        const response = await fetch('https://rickandmortyapi.com/api/character?page=1')

        const characters = await response.json();
        console.log(characters)

        return(characters)
    },
    /* function to get list of characters from api */
    async fetch_character_by_id(character_id) {
        const response = await fetch('https://rickandmortyapi.com/api/character/'+character_id)

        const character_info = await response.json();
        console.log(character_info)

        return(character_info)
    }
}

export default api;