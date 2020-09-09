import React, { useState}  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    
    // const categories = [ 'One punch' , 'One Piece', 'Dragon Ball' ];
    const [categories, setCategories] = useState([ 'Dragon Ball' ]); 

    // const handleApp = () => {
    //     setCategories( [...categories , 'HunterXHunter']);
    // }

    return (
        <> 
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

