import React, {useEffect, useState} from 'react';
import EmployeeTable from "../Components/EmployeeTable.jsx";
import Loading from "../Components/Loading.jsx";

const fetchEmployees = (signal) => {
    return fetch("http://localhost:8080/employee", {
        signal,
    }).then((res) => res.json());
};

const deleteEmployee = (id) => {
    return fetch(`http://localhost:8080/employee/${id}`, {
        method: "DELETE",
    }).then((res) => console.log(res.status));
};


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
            onDelete={handleDelete}
        />
    );
};

export default EmployeeList;