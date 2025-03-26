import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, HttpClientModule, RouterModule],
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employee_list: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employee_list = data;
    });
  }

  deleteEmployee(id: number) {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => { // No response expected
          this.employee_list = this.employee_list.filter(emp => emp.id !== id);
          alert("Employee deleted successfully!");
        },
        (error) => {
          console.error("Error deleting employee:", error);
          alert("Failed to delete employee.");
        }
      );
    }
  }
  
  
  
  

}
