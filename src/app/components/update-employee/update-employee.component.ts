import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-update-employee',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  employee: any = { name: '', designation: '', salary: 0, dateOfJoin: '', company: { id: null } };
  companies: any[] = [];

    constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private companyService: CompanyService,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch employee data
    this.employeeService.getEmployeeById(employeeId).subscribe(data => {
      this.employee = data;
    });

    // Fetch company list for dropdown
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      this.router.navigate(['/employees']); // Redirect after update
    });
  }
  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
