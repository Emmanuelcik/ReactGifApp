import React  from 'react' //{useState, useEffect}
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    
    // useEffect(() =>{
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])
    
    return (
        <>
            <h3>{category}</h3>
           { loading && <p>Cargando...</p>}

            <div className="card-grid">
                {
                    images.map( (img )=> {
                        // return <GifGridItem img = {img} key={img.id}/>
                        return <GifGridItem 
                                    key={img.id}
                                    {...img}
                                />
                    })
                }
            
            </div>
        </>
    )
}
