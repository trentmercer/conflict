import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap'

// Domains are the spaces that players can move devoted around on
function Domain(props) {
    const color = props.dark ? 'dark' : 'light'
    const [flipped, setFlipped] = React.useState(false)

    const flip = () => {
        setFlipped(!flipped)
    }

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">

            <Card className={'domain-' + color}>
                {props.children}
            </Card>

            <Card className={'domain-' + color}>
                {props.children}
            </Card>
        </ReactCardFlip>
    )
}

export default Domain