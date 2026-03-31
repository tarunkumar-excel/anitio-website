import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function generateEnrollmentNo(): string {
  const year = new Date().getFullYear().toString().slice(-2);
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `ANITIO${year}${rand}`;
}

export function calculateDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const GRADE_SCALE: Record<string, string> = {
  'O':  '90–100',
  'A+': '80–89',
  'A':  '70–79',
  'B+': '60–69',
  'B':  '50–59',
  'C':  '40–49',
  'F':  'Below 40',
};

export function getGrade(percentage: number): string {
  if (percentage >= 90) return 'O';
  if (percentage >= 80) return 'A+';
  if (percentage >= 70) return 'A';
  if (percentage >= 60) return 'B+';
  if (percentage >= 50) return 'B';
  if (percentage >= 40) return 'C';
  return 'F';
}
