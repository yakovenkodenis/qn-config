import { OptionsMap } from '@/options';

export const RevenueIds = {
  '0-50M': 0,
  '50M-100M': 1,
  '100M-250M': 2,
  '250M-500M': 3,
  '500M-1B': 4,
  '1B-3B': 5,
  '3B-5B': 6,
  '5B+': 7,
};

export const Revenues = [
  '0-50M',
  '50M-100M',
  '100M-250M',
  '250M-500M',
  '500M-1B',
  '1B-3B',
  '3B-5B',
  '5B+',
]

export const RevenuesMap = Object.values(RevenueIds).reduce((acc, id, idx) => {
  (acc)[id] = { label: Revenues[idx], value: id };
  return acc;
}, {} as OptionsMap);
