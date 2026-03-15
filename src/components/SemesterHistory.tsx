import { Semester } from '@/lib/gpa';
import { History, Trash2 } from 'lucide-react';
import { getGPAInterpretation } from '@/lib/gpa';

interface Props {
  semesters: Semester[];
  onDelete: (id: string) => void;
}

export default function SemesterHistory({ semesters, onDelete }: Props) {
  if (semesters.length === 0) return null;

  return (
    <div className="gpa-card p-5 space-y-3">
      <div className="flex items-center gap-2">
        <History className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-lg">Semester History</h3>
      </div>
      <div className="space-y-2">
        {semesters.map(s => {
          const interp = getGPAInterpretation(s.gpa);
          return (
            <div key={s.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
              <div>
                <p className="font-semibold text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.totalCredits} credits · {s.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-bold text-lg">{s.gpa.toFixed(2)}</p>
                  <span className={interp.color + ' text-[10px]'}>{interp.label}</span>
                </div>
                <button onClick={() => onDelete(s.id)} className="btn-ghost p-1.5 text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
