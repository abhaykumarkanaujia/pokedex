import React, { useContext } from 'react'
import PokemonContext from '../context/PokemonContext/PokemonContext'
import { useNavigate } from 'react-router-dom';

const TypeCard = ({ name, url }) => {
    const naviagate = useNavigate();
    const context = useContext(PokemonContext);
    const { setUrl, setBg } = context;
    const getData = () => {
        setUrl(url);
        setBg(name);
        naviagate('/pokemons')
    }
    return (
        <>
            <div className='hover:cursor-pointer rounded-md' onClick={getData}>
                <div className='rounded-full'>
                    <img className='bg-[#C1B9D8] rounded-full' height={90} width={90} src={`/pokemon_type/${name}.png`} alt='...'></img>
                </div>
            </div>
        </>
    )
}

export default TypeCard