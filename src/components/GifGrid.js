import React from 'react';//, { useState,useEffect }
import { useFetchGifs } from '../hooks/useFechGifts';
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {
    //const [Images, setImages] = useState([]);
    const { data:images,loading } = useFetchGifs(category);
    //const [conteo, setconteo] = useState(1);
    /*useEffect(()=>{
        getGif(category).then(setImages);
    },[category])*/
    //<h2>{conteo}</h2>
    //<button onClick={ () => setconteo( conteo + 1 ) } >+</button>
    
    
    
    //getGif

    useFetchGifs();
    
    return (
        <>
            <li>
                <div className="card-grid" >
                    <h3  className="title-search" > { category } </h3>
                    {loading && 'Cargando' }
                    <br/>
                    { 
                        images.map( (img) => (
                            <GifGridItem key={img.id}  { ...img } />
                        ) )
                    }
                </div>
            </li>

                
        </>
    )
}

export default GifGrid
