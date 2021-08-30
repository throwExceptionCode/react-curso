import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputCahnge = (e)=>{
        setinputValue(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue, ...cats] );
            setinputValue('');
        }
        
        
    };
    return (
        <form onSubmit={ handleSubmit } >
            <h2>AddCategory</h2>
                <input 
                    type='text'
                    value={ inputValue }
                    onChange={ handleInputCahnge }
                />
            </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
};

export default AddCategory

