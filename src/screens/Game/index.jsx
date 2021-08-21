import React from 'react';
import Domain from '../../components/Domain'

import { Container, Row, Col } from 'react-bootstrap'

export default function Game() {

    return (
        <Container style={{marginTop: 18}}>
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
    )
}