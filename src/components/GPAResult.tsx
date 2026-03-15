import { getGPAInterpretation } from '@/lib/gpa';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface Props {
  gpa: number;
  totalCredits: number;
  totalPoints: number;
}

export default function GPAResult({ gpa, totalCredits, totalPoints }: Props) {
  const [copied, setCopied] = useState(false);
  const interp = getGPAInterpretation(gpa);

  const handleCopy = () => {
    navigator.clipboard.writeText(`Semester GPA: ${gpa.toFixed(2)} | Credits: ${totalCredits} | Points: ${totalPoints.toFixed(1)} | Status: ${interp.label}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="gpa-card p-6 text-center space-y-3 border-2 border-primary/20" style={{ background: 'var(--gradient-primary)' }}>
      <p className="text-sm font-medium text-primary-foreground/80">Your Semester GPA</p>
      <p className="text-5xl font-extrabold text-primary-foreground tracking-tight">{gpa.toFixed(2)}</p>
      <span className={interp.color + ' bg-primary-foreground/20 text-primary-foreground'}>
        {interp.emoji} {interp.label}
      </span>
      <div className="flex justify-center gap-6 text-sm text-primary-foreground/70 pt-2">
        <span>Credits: <strong className="text-primary-foreground">{totalCredits}</strong></span>
        <span>Points: <strong className="text-primary-foreground">{totalPoints.toFixed(1)}</strong></span>
      </div>
      <button onClick={handleCopy} className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors mt-2">
        {copied ? <><Check className="h-3.5 w-3.5" /> Copied!</> : <><Copy className="h-3.5 w-3.5" /> Copy Result</>}
      </button>
    </div>
  );
}
