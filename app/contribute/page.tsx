export default function ContributePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
          Contribute Resources
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Help your classmates by sharing notes, solved papers, and helpful tools.
          Every upload is reviewed before it goes live.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          How to Contribute
        </h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
          <li>1. Keep files clearly named by subject and unit.</li>
          <li>2. Upload only original or teacher-approved material.</li>
          <li>3. Use PDFs or Drive links for easy access.</li>
          <li>4. We review every submission within 48 hours.</li>
        </ol>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Disclaimer: Submissions are moderated for quality, accuracy, and fairness.
          We reserve the right to edit or remove content.
        </p>
        <a
          href="https://forms.gle/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Open Contribution Form
        </a>
      </section>
    </div>
  );
}
