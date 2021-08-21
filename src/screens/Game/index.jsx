import React from 'react';
import Board from '../../components/Board'

export default function Game() {

    return (
        <div style={{height: '100%'}}>
            <nav className="header">
                <h5>Victory points:</h5>
                <h5>Action points:</h5>
            </nav>

            <Board />

        </div>
    )
}