import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            Shiroya Study Hub
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Built by a student, for students. Educational use only. Always verify
            information with your instructors.
          </p>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          <p className="font-semibold text-slate-900 dark:text-white">Quick Links</p>
          <div className="mt-3 flex flex-wrap gap-4">
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/exams">Exams</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
