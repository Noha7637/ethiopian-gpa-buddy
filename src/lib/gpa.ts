export const GRADE_MAP: Record<string, number> = {
  'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D': 1.0, 'F': 0.0,
};

export const GRADES = Object.keys(GRADE_MAP);

export interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

export interface Semester {
  id: string;
  name: string;
  courses: Course[];
  gpa: number;
  totalCredits: number;
  date: string;
}

export function calculateGPA(courses: Course[]): { gpa: number; totalCredits: number; totalPoints: number } {
  const valid = courses.filter(c => c.credits > 0 && c.grade in GRADE_MAP);
  if (valid.length === 0) return { gpa: 0, totalCredits: 0, totalPoints: 0 };
  const totalCredits = valid.reduce((s, c) => s + c.credits, 0);
  const totalPoints = valid.reduce((s, c) => s + c.credits * GRADE_MAP[c.grade], 0);
  return { gpa: totalCredits > 0 ? totalPoints / totalCredits : 0, totalCredits, totalPoints };
}

export function calculateCGPA(prevGPA: number, prevCredits: number, currGPA: number, currCredits: number): number {
  const total = prevCredits + currCredits;
  if (total === 0) return 0;
  return (prevGPA * prevCredits + currGPA * currCredits) / total;
}

export function getGPAInterpretation(gpa: number): { label: string; color: string; emoji: string } {
  if (gpa >= 3.7) return { label: 'Excellent', color: 'gpa-badge-excellent', emoji: '🌟' };
  if (gpa >= 3.3) return { label: 'Very Good', color: 'gpa-badge-excellent', emoji: '✨' };
  if (gpa >= 3.0) return { label: 'Good', color: 'gpa-badge-good', emoji: '👍' };
  if (gpa >= 2.0) return { label: 'Satisfactory', color: 'gpa-badge-good', emoji: '📚' };
  if (gpa >= 1.0) return { label: 'Warning', color: 'gpa-badge-warning', emoji: '⚠️' };
  return { label: 'Failing', color: 'gpa-badge-warning', emoji: '🚨' };
}

export function createCourse(): Course {
  return { id: crypto.randomUUID(), name: '', credits: 3, grade: 'A' };
}

export function loadSemesters(): Semester[] {
  try {
    const data = localStorage.getItem('eth-gpa-semesters');
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

export function saveSemesters(semesters: Semester[]) {
  localStorage.setItem('eth-gpa-semesters', JSON.stringify(semesters));
}
