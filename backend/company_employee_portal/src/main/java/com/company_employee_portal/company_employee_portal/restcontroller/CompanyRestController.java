package com.company_employee_portal.company_employee_portal.restcontroller;


import com.company_employee_portal.company_employee_portal.entity.Company;
import com.company_employee_portal.company_employee_portal.entity.Employee;
import com.company_employee_portal.company_employee_portal.service.CompanyService;
import com.company_employee_portal.company_employee_portal.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CompanyRestController {


    private CompanyService companyService;

    @Autowired
    //inject employee dao (using construction injection
    public CompanyRestController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies")
    public List<Company> findAll() {
        return companyService.findAll();
    }

    @GetMapping("/companies/{companyId}")
    public Company findCompanyById(@PathVariable Long companyId) {
        Company theCompany = companyService.findById(companyId);
        if(theCompany == null) {
            throw new RuntimeException("Company id not found " + theCompany);
        }
        return theCompany;
    }

    @PostMapping("/companies")
    public Company addCompany(@RequestBody Company theCompany) {

        Company dbCompany = companyService.save(theCompany);

        return dbCompany;
    }

    @PutMapping("/companies/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company companyDetails) {
        Company company = companyService.findById(id);

        if (company == null) {
            return ResponseEntity.notFound().build();
        }

        company.setName(companyDetails.getName());
        company.setCity(companyDetails.getCity());
        company.setState(companyDetails.getState());
        company.setZipCode(companyDetails.getZipCode());

        Company updatedCompany = companyService.save(company);
        return ResponseEntity.ok(updatedCompany);
    }

    @DeleteMapping("/companies/{companyId}")
    public ResponseEntity<Void> deleteCompanyById(@PathVariable Long companyId) {
        Company theCompany = companyService.findById(companyId);
        if(theCompany == null) {
            throw new RuntimeException("theCompany id not found" + theCompany);
        }
        companyService.deleteById(companyId);
        return ResponseEntity.noContent().build();
    }

}
