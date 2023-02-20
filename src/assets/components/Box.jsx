import React, { useState } from 'react'
import './Box.scss';
import usePosition from './../hooks/usePosition';

function Box({ shape, x, y }) {

    const { position, handlePosition } = usePosition({ x: x, y: y });

    return (
        <div className='box' onMouseMove={handlePosition}>
            <span className={`box__${shape}`} style={{ top: position.y, left: position.x }} ></span>
        </div>
    )
}

export default Box;