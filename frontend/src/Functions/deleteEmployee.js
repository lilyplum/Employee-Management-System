const deleteEmployee = (employeeId) => {
    return fetch(`http://localhost:8080/employees/${employeeId}`, {
        method: "DELETE",
    }).then((res) => console.log(res.status));
};

export default deleteEmployee;