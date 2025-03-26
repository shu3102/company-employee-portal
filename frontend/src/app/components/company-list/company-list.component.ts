import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule, HttpClientModule, RouterModule],
  standalone: true,
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  deleteCompany(id: number) {
    if (confirm("Are you sure you want to delete this company?")) {
      this.companyService.deleteCompany(id).subscribe(
        () => {
          this.companies = this.companies.filter(comp => comp.id !== id);
          alert("Company deleted successfully!");
        },
        (error) => {
          console.error("Error deleting company:", error);
          alert("Failed to delete company.");
        }
      );
    }
  }
}
