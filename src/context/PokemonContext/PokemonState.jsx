import React, { useState } from 'react'
import PokemonContext from './PokemonContext'

const PokemonState = (props) => {

    const [data, setData] = useState([]);
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/type/1/`);
    const [bg, setBg] = useState('fire');
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState(null);

    const getEverything = async ()=>{
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const jsonData = await res.json();
        setNext(jsonData.next);
        setLoading(false);
        return jsonData.results;
    }

    const getNext = async ()=>{
        if(next !== null){
            const res = await fetch(next);
            const jsonData = await res.json();
            setNext(jsonData.next);
            return jsonData.results;
        }
    }

    const getAllData = async () => {
        setLoading(true);
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData.pokemon);
        setLoading(false);
    }

    return (
        <PokemonContext.Provider value={{ getAllData, data, setUrl, url, setData, setBg, bg, loading, getEverything, next, getNext }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonState