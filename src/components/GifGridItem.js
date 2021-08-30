import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( { title, url, id } ) => {
    return (
        <div className='card animate__animated animate__backInDown' >
            <h5 className='TituloImagen'>{ title }</h5>
            <img src={url} alt={title}/>
            <h5>{ id }</h5>
        </div>
    )
}

GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};