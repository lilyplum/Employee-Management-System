const fetchEmployees = (signal) => {
    return fetch("http://localhost:8080/employees", {
        signal,
    }).then((res) => res.json());
};

export default fetchEmployees;