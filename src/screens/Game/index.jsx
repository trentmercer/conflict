import React from 'react';
import Domain from '../../components/Domain'

export default function Game() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 80 }}>
            <div>

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <Domain team={'dark'} />
                    <Domain team={'dark'} />
                    <Domain team={'dark'} />
                    <Domain team={'dark'} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <Domain team={'dark'} />
                    <Domain team={'dark'} />
                    <Domain team={'dark'} />
                    <Domain team={'dark'} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <Domain />
                    <Domain />
                    <Domain />
                    <Domain />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    <Domain />
                    <Domain />
                    <Domain />
                    <Domain />
                </div>
            </div>

        </div>
    )
}