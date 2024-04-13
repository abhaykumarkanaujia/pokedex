import React from 'react'
import Types from './Types'
import TypesState from '../context/TypesState.jsx'
import PokemonState from '../context/PokemonContext/PokemonState.jsx'
import Pokemons from './Pokemons.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Everything from './Everything.jsx'
import About from './About.jsx'

const Home = () => {
    return (
        <>
            <TypesState>
                <PokemonState>
                    <BrowserRouter>
                        <Navbar />
                        <div className=''>
                            <Routes>
                                <Route exact path={'/'} element={<Types />} />
                                <Route exact path={'/types'} element={<Types />} />
                                <Route exact path={'/home'} element={<Everything />} />
                                <Route exact path={'/pokemons'} element={<Pokemons />} />
                                <Route exact path={'/about'} element={<About />}></Route>
                            </Routes>
                        </div>
                    </BrowserRouter>
                </PokemonState>
            </TypesState>
        </>
    )
}

export default Home