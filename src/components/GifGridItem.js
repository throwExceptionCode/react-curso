import React from 'react'

export const GifGridItem = ( {title,url,id} ) => {
    return (
        <div className='card animate__animated animate__backInDown' >
            <h5>{ title }</h5>
            <img src={url} alt={title}/>
            <h5>{ id }</h5>
        </div>
    )
}
