const fetchEmployees = (signal, page = 0) => {
    return fetch(`http://localhost:8080/employees/${page}`, {
        signal,
    }).then((res) => res.json());
};

export default fetchEmployees;