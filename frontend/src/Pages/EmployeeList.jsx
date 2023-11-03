import React, {useEffect, useState} from 'react';
import EmployeeTable from "../Components/EmployeeTable.jsx";
import Loading from "../Components/Loading.jsx";
import fetchEmployees from "../Functions/fetchEmployees.js";
import deleteEmployee from "../Functions/deleteEmployee.js";

const EmployeeList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    const handleDelete = (id) => {
        deleteEmployee(id).catch((err) => {
            console.log(err);
        });

        setData((employees) => {
            return employees.filter((employee) => employee.id !== id);
        });
    };

    useEffect(() => {
        const controller = new AbortController();

        fetchEmployees(controller.signal)
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
        <EmployeeTable
            employees={data}
            handleDelete={handleDelete}
        />
    );
};

export default EmployeeList;