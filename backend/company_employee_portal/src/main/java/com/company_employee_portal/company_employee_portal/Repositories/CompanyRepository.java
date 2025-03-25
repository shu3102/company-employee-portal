package com.company_employee_portal.company_employee_portal.Repositories;


import com.company_employee_portal.company_employee_portal.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}