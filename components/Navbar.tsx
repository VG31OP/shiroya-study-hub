import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          Shiroya Study Hub
        </Link>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/exams">Exams</Link>
          <Link href="/contribute">Contribute</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
