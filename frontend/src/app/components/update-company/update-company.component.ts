import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-update-company',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './update-company.component.html',
  styleUrl: './update-company.component.css'
})
export class UpdateCompanyComponent {

  company: any = { id:'', name: '', city: '', state: '', zipCode: ''};

  constructor(private route: ActivatedRoute, private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompanyById(companyId).subscribe(data => {
      this.company = data;
    });
  }

  onSubmit() {
    if (this.company && this.company.id !== undefined) {
      this.companyService.updateCompany(this.company.id, this.company).subscribe(() => {
        this.router.navigate(['/companies']); // Redirect after update
      });
    }
  }
  onCancel(): void {
    this.router.navigate(['/companies']);
  }
}
