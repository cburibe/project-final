import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "../../../styles/ConfigComp/deleteAccount.css";
import { Stack, Button, Col, Row, Container } from "react-bootstrap";

export const Out = () => (
  <div className="my-4">
    <Container>
      <Row>
        <Col>
          <h2>¿Estas seguro que deseas eliminar tu cuenta?</h2>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Link to="/">
              <Button variant="danger">Salir</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </Container>
  </div>
);
