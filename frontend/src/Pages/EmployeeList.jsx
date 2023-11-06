import React, {useEffect, useState} from 'react';
import EmployeeTable from "../Components/EmployeeTable.jsx";
import Loading from "../Components/Loading.jsx";
import fetchEmployees from "../Functions/fetchEmployees.js";
import deleteEmployee from "../Functions/deleteEmployee.js";
import updateEmployee from "../Functions/updateEmployee.js";
import Pagination from "../Components/Pagination.jsx";

const EmployeeList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    const handleDelete = (employeeId) => {
        deleteEmployee(employeeId).catch((err) => {
            console.log(err);
        });

        setData((employees) => {
            return employees.filter((employee) => employee.id !== employeeId);
        });
    };

    const handleUpdate = (currentEmployee) => {
        updateEmployee(currentEmployee).catch((err) => {
            console.log(err);
        });

        setData((employees) => {
            return employees.map(employee => {
                if (employee.id === currentEmployee.id) {
                    return currentEmployee;
                }
                return employee;
            });
        });
    }

    const fetchEmployeeList = (controller, page = 0) => {
        fetchEmployees(controller.signal, page)
            .then((employees) => {
                setData(employees);
                setLoading(false);
                console.log(employees);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setData(null);
                    throw error;
                }
            });
    }

    useEffect(() => {
        const controller = new AbortController();

        fetchEmployeeList(controller);

        return () => controller.abort();
    }, []);

    if (loading) {
        return (
            <div>
                <Loading/>
            </div>
        )
    }

    return (
        <>
            <EmployeeTable
                employees={data}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
            <Pagination
                data={data}
                fetchEmployeeList={fetchEmployeeList}
            />
        </>
    );
};

export default EmployeeList;