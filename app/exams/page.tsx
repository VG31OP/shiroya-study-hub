const questionLinks = [
  {
    title: "Data Structures - Important Questions",
    link: "https://drive.google.com/",
  },
  {
    title: "Operating Systems - Important Questions",
    link: "https://drive.google.com/",
  },
  {
    title: "Computer Networks - Important Questions",
    link: "https://drive.google.com/",
  },
];

const pastPapers = [
  { title: "GTU Summer 2023 Papers", link: "https://drive.google.com/" },
  { title: "GTU Winter 2022 Papers", link: "https://drive.google.com/" },
  { title: "GTU Summer 2022 Papers", link: "https://drive.google.com/" },
];

const answerGuidance = [
  { marks: "2 Marks", tip: "Define the concept in one line + key example." },
  { marks: "3 Marks", tip: "Short definition + diagram or formula." },
  { marks: "5 Marks", tip: "Explain with steps, bullet points, and sketch." },
  { marks: "7 Marks", tip: "Full explanation + diagram + pros/cons." },
];

export default function ExamsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
          Exam Resources
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Revise smarter with curated question banks, previous year papers, and GTU-style
          answer guidance.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Important Questions
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {questionLinks.map((item) => (
              <li key={item.title} className="flex items-center justify-between gap-3">
                <span className="text-slate-700 dark:text-slate-200">{item.title}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                >
                  Open
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Previous Year Papers
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {pastPapers.map((item) => (
              <li key={item.title} className="flex items-center justify-between gap-3">
                <span className="text-slate-700 dark:text-slate-200">{item.title}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          GTU Answer Guidance
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {answerGuidance.map((guide) => (
            <div
              key={guide.marks}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            >
              <p className="font-semibold text-slate-900 dark:text-white">{guide.marks}</p>
              <p className="mt-2">{guide.tip}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Tip: Always highlight keywords, use diagrams, and keep answers structured with
          headings.
        </p>
      </section>
    </div>
  );
}
