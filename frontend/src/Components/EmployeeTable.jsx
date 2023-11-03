import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import UpdateEmployeeModal from "./UpdateEmployeeModal.jsx";


const EmployeeTable = ({employees, onDelete}) => {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Year in Company</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.yearsInCompany}</td>
                        <td>{employee.email}</td>
                        <td>
                            <UpdateEmployeeModal />
                            <Button type={"button"} variant={"danger"} onClick={() => onDelete(employee.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default EmployeeTable;