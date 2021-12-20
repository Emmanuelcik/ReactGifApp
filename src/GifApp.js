import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

    const [categories, setCategories] = useState(["Naruto"]);

    // const handleAdd = () =>{
    //     setCategories([...categories, "Dbz"]);
    // }
    
    return(
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories= {setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( ( category ) => {
                        return <GifGrid category={category} key={category} />
                    })
                }
            </ol>
        </>
    )
}

export default GifApp;