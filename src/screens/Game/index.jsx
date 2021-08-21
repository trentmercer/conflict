import React from 'react';
import Domain from '../../components/Domain'

import { Container, Row, Col } from 'react-bootstrap'

export default function Game() {

    return (
        <div style={{marginTop: 80}}>
            <Container style={{ backgroundColor: 'black', padding: 18, width: 730 }}>
                <Row>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                    <Col sm={3}>
                        <Domain />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}