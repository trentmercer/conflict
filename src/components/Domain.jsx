import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap'


// Domains are the spaces that players can move devoted around on
export default function Domain(props) {
    const [flipped, setFlipped] = React.useState(false)

    const handleClick = () => {
        setFlipped(!flipped)
    }





    if (props.team === 'dark') {
        return (
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">

                <Card onClick={handleClick} style={{ height: '10rem', width: '10rem', margin: 5, backgroundColor: '#171717', color: 'white' }}>
                </Card>

                <Card onClick={handleClick} style={{ height: '10rem', width: '10rem', margin: 5, backgroundColor:  '#171717', color: 'white'}}>
                    <h4>Domain Type</h4>
                </Card>
            </ReactCardFlip>
        )
    } else {
        return (
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">

                <Card onClick={handleClick} style={{ height: '10rem', width: '10rem', margin: 5 }}>
                </Card>

                <Card onClick={handleClick} style={{ height: '10rem', width: '10rem', margin: 5 }}>
                    <h4>Domain Type</h4>
                </Card>
            </ReactCardFlip>
        )
    }
}