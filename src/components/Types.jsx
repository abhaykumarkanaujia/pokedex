import React, { useContext, useEffect } from 'react';
import TypesContext from '../context/TypesContext.jsx';
import TypeCard from './TypeCard.jsx';

const Types = () => {
    const context = useContext(TypesContext)
    const { getAllTypes, pokemonTypes } = context;
    useEffect(() => {
        getAllTypes();
    }, [])


    return (
        <>
            <div className='w-[100%] h-[100%] relative overflow-hidden'>
            <img className='bg-cover z-[-1] absolute right-0 bottom-0 h-100 w-100' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png'></img>
            <div className='grid grid-cols-4 justify-items-center md:grid-cols-6 m-4 gap-6 mt-16 pt-10'>
            {pokemonTypes && pokemonTypes.map((el)=>{
                return (el.name!="unknown" && el.name != "shadow") && <div key={el.name}><TypeCard url={el.url} name={el.name}/></div>
            })}</div>
            </div>
        </>
    )
}

export default Types