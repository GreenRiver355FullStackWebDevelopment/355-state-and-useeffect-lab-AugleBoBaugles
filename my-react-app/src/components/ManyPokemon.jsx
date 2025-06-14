import { Pokemon } from "./Pokemon";
import { useState, useEffect } from "react";

export function ManyPokemon() {
    const [pokemonData, setPokemonData] = useState("No Pokemon");
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=20')
            .then(response => response.json())
            .then(data => setPokemonData(data));

    }, []);

    console.log(pokemonData);

    return(
        <>
            <Pokemon></Pokemon>
        </>
    )
}