import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap'
import Devoted from './Devoted'

// Domains are the spaces that players can move devoted around on
function Domain(props, ref) {
    const team = props.team || 'light'
    const coordinate = props.coordinate
    const positioning = props.positioning;
    const [flipped, setFlipped] = React.useState(false)
    const [occupied, setOccupied] = React.useState(false)

    React.useImperativeHandle(ref, () => ({
        flip() {
            setFlipped(!flipped)
        },

        isFlipped() {
            return flipped
        }
    }))


    React.useEffect(() => {

        // Determine if space is occupied by a devoted piece
        const isOccupied = () => {
            Object.keys(positioning).forEach(side => {
                if (positioning[side].includes(coordinate)) {
                    setOccupied(true)
                }
            })
        }

        isOccupied()
    }, [coordinate, positioning])



    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">

            <Card className={'domain-' + team}>
                {occupied ? (
                    <Devoted team={team} />
                ) : (
                    ''
                )}
            </Card>

            <Card className={'domain-' + team}>
                {occupied ? (
                    <Devoted team={team} />
                ) : (
                    ''
                )}
                <h5 style={{ position: 'absolute', bottom: 0 }}>{coordinate}</h5>
            </Card>
        </ReactCardFlip>
    )
}

export default React.forwardRef(Domain)