package com.company_employee_portal.company_employee_portal.restcontroller;

import com.company_employee_portal.company_employee_portal.entity.Company;
import com.company_employee_portal.company_employee_portal.entity.Employee;
import com.company_employee_portal.company_employee_portal.service.CompanyService;
import com.company_employee_portal.company_employee_portal.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeRestController {

    private EmployeeService employeeService;
    private CompanyService companyService;

    @Autowired
    //inject employee dao (using construction injection
    public EmployeeRestController(EmployeeService employeeService, CompanyService companyService) {
        this.employeeService = employeeService;
        this.companyService = companyService;
    }

    @GetMapping("/employees")
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    @GetMapping("/employees/{employeeId}")
    public Employee findEmployeeById(@PathVariable Long employeeId) {
        Employee theEmployee = employeeService.findById(employeeId);
        if(theEmployee == null) {
            throw new RuntimeException("Employee id not found " + theEmployee);
        }
        return theEmployee;
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee theEmployee) {
//        theEmployee.setId(0L);

        Employee dbEmployee = employeeService.save(theEmployee);

        return dbEmployee;
    }


    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Employee employee = employeeService.findById(id);

        if (employee == null) {
            return ResponseEntity.notFound().build();
        }

        employee.setName(employeeDetails.getName());
        employee.setDesignation(employeeDetails.getDesignation());
        employee.setSalary(employeeDetails.getSalary());
        employee.setDateOfJoin(employeeDetails.getDateOfJoin());

        if (employeeDetails.getCompany() != null && employeeDetails.getCompany().getId() != null) {
            Company company = companyService.findById(employeeDetails.getCompany().getId());
            if (company != null) {
                employee.setCompany(company);
            }
        }

        Employee updatedEmployee = employeeService.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }



    @DeleteMapping("/employees/{employeeId}")
    public ResponseEntity<Void> deleteEmployeeById(@PathVariable Long employeeId) {
        Employee theEmployee = employeeService.findById(employeeId);
        if(theEmployee == null) {
            throw new RuntimeException("Employee id not found" + theEmployee);
        }
        employeeService.deleteById(employeeId);
//        return "Deleted the emp id " + employeeId;
        return ResponseEntity.noContent().build();
    }


}
