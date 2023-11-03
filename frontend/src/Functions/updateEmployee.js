const updateEmployee = (employee) => {
    return fetch(`http://localhost:8080/employees/${employee.id}`, {
        method: "PUT",
        body: JSON.stringify(employee),
        headers: {
        'Content-Type': 'application/json'
        }
    }).then((res) => console.log(res.status));
};

export default updateEmployee;