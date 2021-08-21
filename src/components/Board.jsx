import React from 'react';
import Domain from './Domain'
import Devoted from './Devoted'

function renderDomain(i, [devotedX, devotedY]) {
    const x = i % 4
    const y = Math.floor(i / 4)

    const isDevotedHere = x === devotedX && y === devotedY

    let dark
    if (i < 8) {
        dark = true;
    }

    const piece = isDevotedHere ? <Devoted /> : null

    return (
        <div key={i} style={{ width: '25%', position: 'relative' }}>
            <Domain dark={dark}>{piece}</Domain>
        </div>
    )
}

export default function Board() {
    let devotedPosition = [0, 0]
    const spaces = []

    for (let i = 0; i < 16; i++) {
        spaces.push(renderDomain(i, devotedPosition))
    }

    return (
        <div className="board">
            <div style={{ width: '800px', height: '400px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {spaces}
            </div>
        </div>
    )
}
