import { OptionsMap } from '@/options';

export const Employees = [
  '0-50',
  '50-100',
  '100-250',
  '250-500',
  '500-1,000',
  '1,000-5,000',
  '5,000-10,000',
  '10,000+',
];

export const EmployeesIds = {
  '0-50': 0,
  '50-100': 1,
  '100-250': 2,
  '250-500': 3,
  '500-1,000': 4,
  '1,000-5,000': 5,
  '5,000-10,000': 6,
  '10,000+': 7,
};

export const EmployeesMap = Object.values(EmployeesIds).reduce((acc, id, idx) => {
  acc[id] = { label: Employees[idx], value: id };
  return acc;
}, {} as OptionsMap);
