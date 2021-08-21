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

            <Card style={{ width: '18rem' }} onClick={handleClick} style={{height: 160, marginTop: 20}}>
                <h1>FRONT</h1>
            </Card>

            <Card style={{ width: '18rem' }} onClick={handleClick} style={{height: 160, marginTop: 20}}>
                <h1>BACK</h1>
            </Card>
        </ReactCardFlip>
    )
}