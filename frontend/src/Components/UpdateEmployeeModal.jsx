import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import updateEmployee from "../Functions/updateEmployee.js";

const UpdateEmployeeModal = ({employee, handleUpdate}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [currentEmployee, setCurrentEmployee] = useState(employee);

    const updateData = e => {
        setCurrentEmployee({
            ...currentEmployee,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal centered size={"lg"} show={show} onHide={handleClose}>

                <Modal.Header>
                    <Modal.Title>Editing</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstName"
                                type="text"
                                defaultValue={employee.firstName}
                                autoFocus
                                onChange={updateData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastName"
                                type="text"
                                defaultValue={employee.lastName}
                                autoFocus
                                onChange={updateData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                defaultValue={employee.email}
                                autoFocus
                                onChange={updateData}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() => {
                        handleClose();
                        handleUpdate(currentEmployee);
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
};

export default UpdateEmployeeModal;