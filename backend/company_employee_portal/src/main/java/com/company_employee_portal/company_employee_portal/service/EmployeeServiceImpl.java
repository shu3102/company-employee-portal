package com.company_employee_portal.company_employee_portal.service;

import com.company_employee_portal.company_employee_portal.Repositories.EmployeeRepository;
import com.company_employee_portal.company_employee_portal.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findById(Long theId) {
        Optional<Employee> result= employeeRepository.findById(theId);
        Employee theEmployee = null;
        if(result.isPresent()) {
            theEmployee = result.get();
            return theEmployee;
        }
        else {
            return null;
        }
    }

    @Override
    public Employee save(Employee theEmployee) {
        return employeeRepository.save(theEmployee);
    }

    @Override
    public void deleteById(Long theId) {
        employeeRepository.deleteById(theId);
    }
}
