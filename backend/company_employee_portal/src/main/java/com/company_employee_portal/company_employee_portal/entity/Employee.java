package com.company_employee_portal.company_employee_portal.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "designation")
    private String designation;

    @Column(name = "salary")
    private Double salary;

    @Column(name = "date_of_join")
    private LocalDate dateOfJoin;

    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    // Constructors

    public Employee() {}

    public Employee(Long id, Company company, LocalDate dateOfJoin, Double salary, String designation, String name) {
        this.id = id;
        this.company = company;
        this.dateOfJoin = dateOfJoin;
        this.salary = salary;
        this.designation = designation;
        this.name = name;
    }


    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public LocalDate getDateOfJoin() {
        return dateOfJoin;
    }

    public void setDateOfJoin(LocalDate dateOfJoin) {
        this.dateOfJoin = dateOfJoin;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}