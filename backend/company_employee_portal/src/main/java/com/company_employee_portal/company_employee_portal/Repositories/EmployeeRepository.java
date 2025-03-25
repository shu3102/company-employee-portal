package com.company_employee_portal.company_employee_portal.Repositories;


import com.company_employee_portal.company_employee_portal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}