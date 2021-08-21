import React from 'react';

export default function Devoted(props) {

    if (props.team === 'dark') {
        return (
            <div className="devoted-dark" />
        )
    } else {
        return (
            <div className="devoted-light" />
        )
    }
}