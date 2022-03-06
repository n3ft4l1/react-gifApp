// import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ lasa}) => {

    const {data:images,loading} = useFetchGifs(lasa)
  return (
     <>
            
        <h1>{lasa}</h1>
        {loading && <p>Cargando...</p> }
        <div className='card-grid'>
            
            
            {
                images.map( img =>(
                    
                    <GifGridItem
                        key = {img.id}
                        {...img}

                    />
                    ))
                }
        


        </div>
    </> 
  )
}
