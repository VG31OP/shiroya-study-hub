export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
          About Shiroya Study Hub
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          A student-built platform focused on making study materials easier to
          find, share, and use—without the clutter.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Mission
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            To help classmates study better with organized notes, practical tools,
            and exam guidance that feels approachable and fast.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Community First
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Every resource is shared by students. We focus on clarity, kindness,
            and keeping everything free and easy to access.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
        <p className="font-semibold text-slate-900 dark:text-white">
          Built by a student, for students.
        </p>
        <p className="mt-3">
          Want to help grow the hub? Share notes, point out improvements, or
          suggest new tools anytime.
        </p>
      </section>
    </div>
  );
}
