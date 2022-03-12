import React, { Component } from "react";
import { CgProfile } from 'react-icons/cg';
import "../../../styles/ConfigComp/deleteAccount.css"
import { Stack, Button, Col, Row, Container } from 'react-bootstrap';

export const DeleteAccount = () => (
    <div className="my-4">
        <Container>
            <Row>
                <Col>
                    <h2>¿Estas seguro que deseas eliminar tu cuenta?</h2>
                    <Stack gap={2} className="col-md-5 mx-auto">
                        <Button variant="danger">Si, quiero eliminar mi cuenta</Button>
                        <Button variant="outline-secondary">Cancelar</Button>
                    </Stack>
                </Col>
            </Row>
        </Container>

    </div >
);
