import React, { useState, useEffect } from 'react'

const PokemonCard = ({ name, url }) => {
    const [bg, setBg] = useState("");
    const getImageUrl = (u) => {
        const regex = /\/pokemon\/(\d+)\//;

        const match = url.match(regex);

        if (match) {
            const id = parseInt(match[1]);
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        } else {
            return null;
        }
    }

    const getBg = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setBg(data.types[0].type.name);
    }

    useEffect(() => {
        getBg();
    }, [url])


    return (
        <>
            <div className='border-2 w-[100%] relative overflow-hidden inline-block rounded-xl'>
                <img className='bg-cover bg-gradient-to-r from-sky-500 to-indigo-500 z-[-1] absolute h-[100%] w-[100%]' src={`/card_backgrounds/${bg}.jpeg`} alt='' onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "/card_backgrounds/normal.jpeg";
                    }}/>
                <div>
                    <img height={250} width={250} src={getImageUrl(url)} alt='...' />
                </div>
                <div className='m-2 bg-slate-100 p-1 rounded-3xl'>
                    <h1 className='text-center'>{name}</h1>
                </div>

            </div>
        </>
    )
}

export default PokemonCard;