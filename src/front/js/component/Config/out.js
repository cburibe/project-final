import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "../../../styles/ConfigComp/deleteAccount.css";
import { Stack, Button, Col, Row, Container } from "react-bootstrap";
import { Context } from "../../store/appContext";
import { useHistory } from "react-router-dom";

export const Out = () => {
  const { actions } = useContext(Context);
  const history = useHistory();
  const handleOut = (e) => {
    e.preventDefault();
    actions.logout();
    history.push("/");
  };
  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col>
            <h2>¿Estas seguro que deseas eliminar tu cuenta?</h2>
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="danger" onClick={(e) => handleOut(e)}>
                Salir
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
