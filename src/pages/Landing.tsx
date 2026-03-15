import { GraduationCap, Calculator, TrendingUp, BookOpen, ChevronRight, BarChart3, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    { icon: Calculator, title: 'Semester GPA', desc: 'Calculate your GPA instantly using the Ethiopian 4.0 grading scale.' },
    { icon: TrendingUp, title: 'CGPA Tracker', desc: 'Track your cumulative GPA across all semesters effortlessly.' },
    { icon: BarChart3, title: 'Progress Charts', desc: 'Visualize your academic journey with beautiful charts.' },
    { icon: BookOpen, title: 'Grade Reference', desc: 'Quick access to the Ethiopian university grading table.' },
    { icon: Shield, title: 'Save & Export', desc: 'Save your semester data and export professional reports.' },
    { icon: GraduationCap, title: 'Multi-Semester', desc: 'Manage and compare multiple semesters in one place.' },
  ];

  const universities = [
    'Addis Ababa University', 'Adama Science & Technology', 'Jimma University',
    'Hawassa University', 'Mekelle University', 'Bahir Dar University',
    'Gondar University', 'Haramaya University',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight">Ethiopian University</h1>
              <p className="text-xs text-muted-foreground leading-tight">GPA Calculator</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => navigate('/auth')} className="btn-outline text-sm px-4 py-2">
              Log In
            </button>
            <button onClick={() => navigate('/auth?tab=signup')} className="btn-primary text-sm px-4 py-2">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            🇪🇹 Built for Ethiopian University Students
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Track Your <span className="text-primary">Academic Success</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            The most comprehensive GPA calculator designed specifically for Ethiopian university students.
            Calculate semester GPA, track CGPA, and visualize your academic progress — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => navigate('/auth?tab=signup')} className="btn-primary text-base px-8 py-3 rounded-xl">
              Start Calculating <ChevronRight className="h-5 w-5" />
            </button>
            <button onClick={() => navigate('/auth')} className="btn-outline text-base px-8 py-3 rounded-xl">
              I Have an Account
            </button>
          </div>
        </div>
        {/* Decorative gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-10" style={{ background: 'var(--gradient-hero)' }} />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-3">Everything You Need</h3>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Powerful tools to help you stay on top of your academic performance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.title} className="gpa-card p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold">{f.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Universities */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">Trusted by students from</p>
          <div className="flex flex-wrap justify-center gap-3">
            {universities.map(u => (
              <span key={u} className="rounded-full border bg-card px-4 py-1.5 text-xs font-medium">{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="rounded-2xl p-8 sm:p-12 text-primary-foreground" style={{ background: 'var(--gradient-hero)' }}>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Track Your GPA?</h3>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Join thousands of Ethiopian university students already using our calculator.
          </p>
          <button onClick={() => navigate('/auth?tab=signup')} className="inline-flex items-center gap-2 rounded-xl bg-card text-foreground px-8 py-3 font-semibold hover:opacity-90 transition-opacity">
            Get Started Free <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        <p>Ethiopian University GPA Calculator · Built for students across Ethiopia 🇪🇹</p>
      </footer>
    </div>
  );
}
