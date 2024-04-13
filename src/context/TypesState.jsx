import React, { useState } from 'react';
import TypesContext from './TypesContext';

const TypesState = (props) => {

    const [pokemonTypes, setPokemonTypes] = useState([])

    const getAllTypes = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/type/`);
        const types = await res.json();
        setPokemonTypes(types.results)
    }

    return (
        <TypesContext.Provider value={{ getAllTypes, pokemonTypes }}>
            {props.children}
        </TypesContext.Provider>
    )
}

export default TypesState;