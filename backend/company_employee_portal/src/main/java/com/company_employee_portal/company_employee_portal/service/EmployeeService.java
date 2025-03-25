package com.company_employee_portal.company_employee_portal.service;

import com.company_employee_portal.company_employee_portal.entity.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();

    Employee findById(Long theId);

    Employee save(Employee theEmployee);

    void deleteById(Long theId);
}
