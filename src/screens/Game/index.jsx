import React from 'react';
import Board from '../../components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Game() {

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{ height: '100%' }}>
                <nav className="header">
                    <h5>Victory points:</h5>
                    <h5>Action points:</h5>
                </nav>

                <Board />
            </div>
        </DndProvider>
    )
}