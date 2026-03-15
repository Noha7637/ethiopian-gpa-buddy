import { Trash2 } from 'lucide-react';
import { Course, GRADES } from '@/lib/gpa';

interface Props {
  course: Course;
  onChange: (course: Course) => void;
  onRemove: () => void;
  index: number;
}

export default function CourseRow({ course, onChange, onRemove, index }: Props) {
  return (
    <div className="animate-slide-up grid grid-cols-12 gap-2 sm:gap-3 items-center">
      <span className="col-span-1 text-xs font-semibold text-muted-foreground text-center">{index + 1}</span>
      <input
        className="gpa-input col-span-4 sm:col-span-5"
        placeholder="Course name"
        value={course.name}
        onChange={e => onChange({ ...course, name: e.target.value })}
      />
      <input
        className="gpa-input col-span-2"
        type="number"
        min={1}
        max={10}
        value={course.credits}
        onChange={e => onChange({ ...course, credits: Math.max(0, Number(e.target.value)) })}
      />
      <select
        className="gpa-select col-span-3 sm:col-span-2"
        value={course.grade}
        onChange={e => onChange({ ...course, grade: e.target.value })}
      >
        {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
      <button onClick={onRemove} className="col-span-2 sm:col-span-2 btn-ghost text-destructive p-1.5 rounded-lg justify-self-center" aria-label="Remove course">
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
