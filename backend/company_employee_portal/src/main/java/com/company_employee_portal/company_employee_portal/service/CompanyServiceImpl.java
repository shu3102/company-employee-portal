package com.company_employee_portal.company_employee_portal.service;

import com.company_employee_portal.company_employee_portal.Repositories.CompanyRepository;
import com.company_employee_portal.company_employee_portal.entity.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {

    private CompanyRepository companyRepository;

    @Autowired
    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public List<Company> findAll() {
        return companyRepository.findAll();
    }


    public Company findById(Long theId) {
        Optional<Company> result= companyRepository.findById(theId);
        Company theCompany = null;
        if(result.isPresent()) {
            theCompany = result.get();
            return theCompany;
        }
        else {
            return null;
        }
    }

    @Override
    public Company save(Company theCompany) {
        return companyRepository.save(theCompany);
    }

    @Override
    public void deleteById(Long theId) {
        companyRepository.deleteById(theId);
    }
}
