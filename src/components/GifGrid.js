import React,{useState,useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs'


export const GifGrid = ({category}) => {

    const {loading} = useFetchGifs();

    /* const [images, setImages] = useState([])
    useEffect(()=>{
        getGifs(category)
            //.then(imgs => setImages(imgs))
            //es lo mismo que 
            .then( setImages )
            .catch()
    },[category]) */

    return (
        <>
        <h3>{category}</h3>
        {loading ? "Cargando...": "data cargada"}
        {/* <div className="card-grid">

            {
                images.map( img => (
                    <GifGridItem
                        key={img.id}
                        {...img}/>
                ))
            }
                
        
        </div> */}
        </>
    )
}
