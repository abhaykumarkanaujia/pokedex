import React, { useContext, useEffect } from 'react';
import PokemonContext from '../context/PokemonContext/PokemonContext';
import PokemonCard from './PokemonCard';

const Pokemons = () => {
    const context = useContext(PokemonContext);
    const { data, getAllData, url, setData, bg, loading } = context;

    useEffect(() => {
        getAllData();

        return () => {
            setData([]);
        }
    }, [url])


    return (
        <>
            {loading?<div>loading......</div>:<div className='grid grid-cols-1 md:grid-cols-5 gap-4 m-10 mt-16'>
                {data && data.map((el) => {
                    return <div key={el.pokemon.url}><PokemonCard name={el.pokemon.name} bg={bg} url={el.pokemon.url} /></div>
                })}
            </div>}
        </>

    )
}

export default Pokemons;