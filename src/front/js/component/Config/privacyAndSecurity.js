import React, { Component, useState } from "react";
import { CgProfile } from 'react-icons/cg';
import "../../../styles/ConfigComp/privacyAndSecurity.css"
import { ToggleButtonGroup, ToggleButton, Accordion } from 'react-bootstrap';

export const PrivacyAndSecurity = () => {

    const [value, setValue] = useState([1]);
    const handleChange = (val) => setValue(val);
    return (
        <>


            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><p>¿Quieres que tu cuenta sea visible?</p></Accordion.Header>
                    <Accordion.Body>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                                Publica
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                                Usuarios de Turismo Social
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                                Solo amigos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><p>¿Quieres que tu información sea visible?</p></Accordion.Header>
                    <Accordion.Body>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                                Publica
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                                Usuarios de Turismo Social
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                                Solo amigos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><p>¿Quieres que tus fotos sean visible?</p></Accordion.Header>
                    <Accordion.Body>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                                Publica
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                                Usuarios de Turismo Social
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                                Solo amigos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><p>¿Quieres que tu cuenta sea visible?</p></Accordion.Header>
                    <Accordion.Body>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                                Publica
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                                Usuarios de Turismo Social
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                                Solo amigos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><p>¿Quieres que tu cuenta sea visible?</p></Accordion.Header>
                    <Accordion.Body>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                                Publica
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                                Usuarios de Turismo Social
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                                Solo amigos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><p>¿Quieres que tu cuenta sea visible?</p></Accordion.Header>
                    <Accordion.Body>
                        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                                Publica
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                                Usuarios de Turismo Social
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                                Solo amigos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>












        </>
    );
}

