import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation'
import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    // console.log();
    return (
        <div className="card animate__animated animate__backInUp">
            <img key={id} src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

