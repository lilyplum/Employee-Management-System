package com.company.employees.controller;

import com.company.employees.data.Employee;
import com.company.employees.repository.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/{page}")
    public Page<Employee> getEmployees(@PathVariable int page ) {
        return employeeRepository.findAll(PageRequest.of(page,10, Sort.by("id")));
    }


    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        Employee currentEmployee = employeeRepository.findById(id).orElseThrow(RuntimeException::new);
        currentEmployee.setFirstName(employee.getFirstName());
        currentEmployee.setLastName(employee.getLastName());
        currentEmployee.setEmail(employee.getEmail());
        currentEmployee = employeeRepository.save(currentEmployee);

        return ResponseEntity.ok(currentEmployee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }


}
