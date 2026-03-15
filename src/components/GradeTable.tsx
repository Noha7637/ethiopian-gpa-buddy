import { GRADE_MAP } from '@/lib/gpa';
import { BookOpen } from 'lucide-react';

export default function GradeTable() {
  return (
    <div className="gpa-card p-5 space-y-3">
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-lg">Ethiopian Grading Scale</h3>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {Object.entries(GRADE_MAP).map(([grade, points]) => (
          <div key={grade} className="flex justify-between px-3 py-1.5 rounded-md text-sm odd:bg-muted/50">
            <span className="font-semibold">{grade}</span>
            <span className="text-muted-foreground">{points.toFixed(1)}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground pt-2">
        Based on the 4.0 scale used by Addis Ababa University, Adama Science & Technology University, Mekelle University, and other Ethiopian institutions.
      </p>
    </div>
  );
}
