import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-company-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.css'
})
export class CompanyFormComponent {
  companyForm: FormGroup;
  

  constructor(private fb: FormBuilder, 
    private companyService: CompanyService, 
    private router: Router ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      city: [''],
      state: [''],
      zipCode: ['']
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      this.companyService.createCompany(this.companyForm.value).subscribe(
        () => {
          console.log('Company created successfully');
          alert("Company created successfully!");
          this.router.navigate(['/companies']);
        },
        (error) => {
          console.error('Error creating company:', error);
          alert("Failed to create company.");
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  onCancel(): void {
    this.router.navigate(['/companies']);
  }
  
  
}
