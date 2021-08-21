import React from 'react';

export default function Devoted(props) {

    const color = props.dark ? 'dark' : 'light'

    if (color === 'dark') {
        return (
            <div className="devoted-dark" />
        )
    } else {
        return (
            <div className="devoted-light" />
        )
    }
}