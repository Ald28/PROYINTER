// src/components/common/UpdateModal.jsx
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Actualización de datos de la operación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formReactivo">
                        <Form.Label>Reactivo</Form.Label>
                        <Form.Control type="text" defaultValue="Cloruro férrico" />
                    </Form.Group>
                    <Form.Group controlId="formCaudal">
                        <Form.Label>Caudal (En L/h)</Form.Label>
                        <Form.Control type="number" defaultValue="10.00" />
                    </Form.Group>
                    <Form.Group controlId="formPresion">
                        <Form.Label>Presión (En Bar)</Form.Label>
                        <Form.Control type="number" defaultValue="2.00" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateModal;
