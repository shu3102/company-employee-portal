import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit{
  employee: Employee| null = null; 

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,  private router: Router ) {}

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id')); // Get ID from URL

    this.employeeService.getEmployeeById(employeeId).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        console.error('Error fetching employee:', error);
      }
    );
  }
  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}
