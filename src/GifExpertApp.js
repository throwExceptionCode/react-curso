import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp = () => {
    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['GOT']);
    
    /*const handeleAdd = () =>{
        //let newCategories = [...categories];
        //newCategories.push('AOT');
        //setCategories(newCategories);
        setCategories(cats => [...cats,'AOT'] );
    };*/
    
    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={ setCategories } />
            <ol>
                {  
                 categories.map((category,i) => 
                 <GifGrid 
                 key={ category } 
                 category={category}
                 /> 
                 )
                }
            </ol>
            <hr></hr>
        </>
    )
}
