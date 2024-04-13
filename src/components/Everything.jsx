import React, { memo, useContext, useEffect, useState } from 'react'
import PokemonContext from '../context/PokemonContext/PokemonContext'
import PokemonCard from './PokemonCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const Everything = () => {
    const context = useContext(PokemonContext);
    const [all, setAll] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { getEverything, loading, getNext, next } = context;

    const getNextValues = async()=>{
        setIsLoading(true);
        const data = await getNext();
        setAll(all.concat(data));
        setIsLoading(false);
    }

    useEffect(() => {
        const getValues = async()=>{
            const data = await getEverything();
            setAll(data);
        }
        getValues();
    }, []);
    return (
        <>
            {loading ?
                <div>Loading.....</div>
                :
                <InfiniteScroll dataLength={all ? all?.length: 0} next={getNextValues}
                    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                    hasMore={next !== null}
                    loader={isLoading&&<h4 className='text-xl fixed bottom-0 right-0 left-0 text-center'>Loading...</h4>}
                    scrollableTarget="scrollableDiv">
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 m-6 md:m-10 pt-5 mt-16'>
                        {all && all.map((el) => {
                            return <div key={el.url}><PokemonCard name={el.name} url={el.url} /></div>
                        })}</div>
                </InfiniteScroll>

            }
        </>
    )
}

export default memo(Everything);