import { useState } from 'react';
import { calculateCGPA, getGPAInterpretation } from '@/lib/gpa';
import { Calculator } from 'lucide-react';

export default function CGPACalculator({ currentGPA, currentCredits }: { currentGPA: number; currentCredits: number }) {
  const [prevGPA, setPrevGPA] = useState('');
  const [prevCredits, setPrevCredits] = useState('');

  const hasPrev = prevGPA !== '' && prevCredits !== '';
  const cgpa = hasPrev ? calculateCGPA(Number(prevGPA), Number(prevCredits), currentGPA, currentCredits) : null;
  const interp = cgpa !== null ? getGPAInterpretation(cgpa) : null;

  return (
    <div className="gpa-card p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Calculator className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-lg">CGPA Calculator</h3>
      </div>
      <p className="text-sm text-muted-foreground">Enter your previous academic record to calculate cumulative GPA.</p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Previous CGPA</label>
          <input className="gpa-input" type="number" step="0.01" min="0" max="4" placeholder="e.g. 3.50" value={prevGPA} onChange={e => setPrevGPA(e.target.value)} />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Previous Total Credits</label>
          <input className="gpa-input" type="number" min="0" placeholder="e.g. 60" value={prevCredits} onChange={e => setPrevCredits(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Current Semester GPA</label>
          <input className="gpa-input bg-muted" value={currentGPA.toFixed(2)} disabled />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Current Credits</label>
          <input className="gpa-input bg-muted" value={currentCredits} disabled />
        </div>
      </div>
      {cgpa !== null && interp && (
        <div className="animate-slide-up rounded-lg bg-primary/5 border border-primary/20 p-4 text-center">
          <p className="text-sm text-muted-foreground">Cumulative GPA</p>
          <p className="text-3xl font-extrabold text-primary">{cgpa.toFixed(2)}</p>
          <span className={interp.color}>{interp.emoji} {interp.label}</span>
        </div>
      )}
    </div>
  );
}
