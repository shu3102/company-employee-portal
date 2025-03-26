import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-company-details',
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {

  company: Company | null = null; // Store company details

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    // Extract company ID from route parameters
    const companyId = Number(this.route.snapshot.paramMap.get('companyId'));
    
    if (companyId) {
      this.companyService.getCompanyById(companyId).subscribe({
        next: (data) => this.company = data,
        error: (err) => console.error('Error fetching company:', err)
      });
    }
  }
  onCancel(): void {
    this.router.navigate(['/companies']);
  }
}
