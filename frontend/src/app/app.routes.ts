import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

export const routes: Routes = [
  // Companies
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
    { path: 'companies', loadComponent: () => import('./components/company-list/company-list.component').then(m => m.CompanyListComponent) },
    { path: 'companies/new', loadComponent: () => import('./components/company-form/company-form.component').then(m => m.CompanyFormComponent) },
    { path: 'companies/:companyId', component: CompanyDetailsComponent },  
  { path: 'update-company/:id', component: UpdateCompanyComponent },
  // Employee
  { path: 'employees', loadComponent: () => import('./components/employee-list/employee-list.component').then(m => m.EmployeeListComponent) },
    { path: 'employees/new', loadComponent: () => import('./components/employee-form/employee-form.component').then(m => m.EmployeeFormComponent) },
    { path: 'employees/:id', component: EmployeeDetailComponent },
    { path: 'update-employee/:id', component: UpdateEmployeeComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}