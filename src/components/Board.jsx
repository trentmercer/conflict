import React from 'react';
import Domain from './Domain'

import { coordinates } from '../data/entities'

export default function Board() {

    const [positioning] = React.useState({
        light: ['a2', 'b2', 'c2', 'd2'],
        dark: ['a3', 'b3', 'c3', 'd3']
    })


    return (
        <div className="board">
            <div>
                {coordinates.map((rows, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        {rows.map((space, index) => {
                            if (space[1] === '4' || space[1] === '3') {
                                return (
                                    <Domain key={index} coordinate={space} team={'dark'} positioning={positioning} />
                                )
                            } else {
                                return (
                                    <Domain key={index} coordinate={space} team={'light'} positioning={positioning} />
                                )
                            }
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}