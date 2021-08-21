import React from 'react';
import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'

export default function Devoted(props) {
    const color = props.dark ? 'dark' : 'light'
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DEVOTED,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className={'devoted-' + color} style={{ opacity: isDragging ? 0.5 : 1 }} />
    )
}