package com.company_employee_portal.company_employee_portal.service;

import com.company_employee_portal.company_employee_portal.entity.Company;

import java.util.List;


public interface CompanyService {

    List<Company> findAll();

    Company findById(Long theId);

    Company save(Company theEmployee);

    void deleteById(Long theId);
}
