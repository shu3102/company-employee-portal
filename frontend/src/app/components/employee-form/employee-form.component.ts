import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  companies: any[] = [];

  constructor(private fb: FormBuilder, 
    private employeeService: EmployeeService,     
    private companyService: CompanyService,     
    private router: Router) {

  }
  ngOnInit(): void {

    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      designation: [''],
      salary: [0],
      dateOfJoin: [''],
      company: [null]
    });

    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }
  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;

      // Convert company ID to expected format
      const employeeData = {
        ...formData,
        company: { id: formData.company } // Wrap the company ID in an object
      };

      this.employeeService.createEmployee(employeeData).subscribe(() => {
        alert('Employee Created Successfully');
        this.router.navigate(['/employees']); // Redirect to employee list
      }, error => {
        console.error('Error creating employee:', error);
        alert("Error creating employee");
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
