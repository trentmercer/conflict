import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap'


// Domains are the spaces that players can move devoted around on
export default function Domain() {
    const [flipped, setFlipped] = React.useState(false)

    const handleClick = () => {
        setFlipped(!flipped)
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">

            <Card onClick={handleClick} style={{height: 160, width: '18rem'}}>
                <h1>FRONT</h1>
            </Card>

            <Card onClick={handleClick} style={{height: 160, width: '18rem'}}>
                <h1>BACK</h1>
            </Card>
        </ReactCardFlip>
    )
}