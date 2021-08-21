import React from 'react';
import Domain from './Domain'
import Devoted from './Devoted'


export default function Board() {
    const [devotedPosition, setDevotedPosition] = React.useState([0, 1])
    const spaces = []

    function handleDomainClick(toX, toY) {

        if (canMoveDevoted(toX, toY)) {
            setDevotedPosition([toX, toY])
        }
    }

    function canMoveDevoted(toX, toY) {
        const [x, y] = devotedPosition
        const dx = toX - x
        const dy = toY - y

        return (
            (Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 0)
        )
    }

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
            <div onClick={() => handleDomainClick(x, y)} key={i} style={{ width: '25%', position: 'relative' }}>
                <Domain dark={dark}>{piece}</Domain>
            </div>
        )
    }

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
