import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import deleteEmployee from "../Functions/deleteEmployee.js";

const DeleteEmployeeModal = ({employee, handleDelete}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal centered size={"lg"} show={show} onHide={handleClose}>

                <Modal.Header>
                    <Modal.Title>Deleting</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to permanently remove <b>{employee.firstName.toUpperCase()} {employee.lastName.toUpperCase()}</b> from the
                        database</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleClose();
                            handleDelete(employee.id);
                        }}>
                        Delete
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
};

export default DeleteEmployeeModal;