import { Company } from './company.model';

export interface Employee {
  id?: number;
  name: string;
  designation: string;
  salary: number;
  dateOfJoin: string;
  company: Company;
}
