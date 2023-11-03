const deleteEmployee = (id) => {
    return fetch(`http://localhost:8080/employees/${id}`, {
        method: "DELETE",
    }).then((res) => console.log(res.status));
};

export default deleteEmployee;