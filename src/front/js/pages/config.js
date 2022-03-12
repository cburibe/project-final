import React, { useState, useEffect, useContext } from "react";
import "../../styles/config.css";
import { FaCog } from 'react-icons/fa';
import { Context } from "../store/appContext";

//Importar mis componentes
import { ChangePassword } from "../component/Config/changePassword";
import { LinkRrss } from "../component/Config/linkRrss";
import { PrivacyAndSecurity } from "../component/Config/privacyAndSecurity";
import { TermsAndConditions } from "../component/Config/termsAndConditions";
import { DeleteAccount } from "../component/Config/deleteAccount";
import { Help } from "../component/Config/help";
import { MyProfile } from "../component/Config/myProfile";
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';

export const Config = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="myProfile">
                            <Row className="my-3">
                                <Col sm={4} className="cursor">
                                    <Nav id="navConfig" variant="pills" className="flex-column my-2">
                                        <Nav.Item>
                                            <Nav.Link eventKey="myProfile">Mi perfil</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="linkRrss">Vincula redes sociales</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="changePassword">Cambiar contraseña</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="privacyAndSecurity">Privacidad y seguridad</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="termsAndConditions">Terminos y condiciones</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="deleteAccount">Eliminar cuenta</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="help">Ayuda</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="myProfile">
                                            <MyProfile />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="linkRrss">
                                            <LinkRrss />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="changePassword">
                                            <ChangePassword />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="privacyAndSecurity">
                                            <PrivacyAndSecurity />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="termsAndConditions">
                                            <TermsAndConditions />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="deleteAccount">
                                            <DeleteAccount />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="help">
                                            <Help />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
