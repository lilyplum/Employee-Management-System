import React, {useEffect, useState} from 'react';
import EmployeeTable from "../Components/EmployeeTable.jsx";
import Loading from "../Components/Loading.jsx";

const fetchEmployees = (signal) => {
    return fetch("http://localhost:8080/employee", {
        signal,
    }).then((res) => res.json());
};


const EmployeeList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

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
    }, [data]);

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
        />
    );
};

export default EmployeeList;