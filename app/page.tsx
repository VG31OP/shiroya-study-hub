export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
          Shiroya Study Hub
        </p>
        <h1 className="font-display text-4xl font-semibold text-slate-900 md:text-5xl dark:text-white">
          By students, for students
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          A minimal, modern academic hub for notes, smart calculators, and exam
          prep resources. Built to help classmates move faster with organized
          content and tools that just work.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/notes"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Notes
          </a>
          <a
            href="/tools"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Try Student Tools
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Notes Library",
            description: "Subject-wise PDFs, cleanly organized by unit.",
            icon: "📚",
            href: "/notes",
          },
          {
            title: "Smart Tools",
            description: "CGPA, attendance, converters, and more.",
            icon: "🛠️",
            href: "/tools",
          },
          {
            title: "Exam Prep",
            description: "Important questions, papers, and answer tips.",
            icon: "📝",
            href: "/exams",
          },
        ].map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="text-2xl">{card.icon}</div>
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-900 dark:text-white">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {card.description}
            </p>
          </a>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 p-8 text-white shadow-lg dark:border-slate-800">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Study smarter with a hub that stays fast, clean, and student-ready.
          </h2>
          <p className="mt-3 text-sm text-slate-100/90">
            Everything here is organized for quick scanning and instant access.
            No logins, no distractions—just the resources your class needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contribute"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contribute Resources
            </a>
            <a
              href="/about"
              className="rounded-full border border-white/50 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
