import { Lightbulb } from 'lucide-react';

const tips = [
  'Attend all lectures and tutorials consistently.',
  'Form study groups with classmates for difficult courses.',
  'Visit your professors during office hours for clarification.',
  'Start assignments early to avoid last-minute stress.',
  'Use the university library resources and past exams.',
  "Balance your course load \u2014 don\u0027t overload with hard courses.",
  'Review your notes within 24 hours of each lecture.',
  'Focus on understanding concepts, not memorizing.',
];

export default function AcademicTips() {
  return (
    <div className="gpa-card p-5 space-y-3">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-accent" />
        <h3 className="font-bold text-lg">Tips for Improving GPA</h3>
      </div>
      <ul className="space-y-2">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-bold shrink-0">•</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
