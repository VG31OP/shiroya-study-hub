const subjects = [
  {
    name: "Data Structures",
    units: [
      { title: "Unit 1: Arrays & Linked Lists", link: "https://drive.google.com/" },
      { title: "Unit 2: Stacks & Queues", link: "https://drive.google.com/" },
      { title: "Unit 3: Trees & Graphs", link: "https://drive.google.com/" },
    ],
  },
  {
    name: "Operating Systems",
    units: [
      { title: "Unit 1: Process Management", link: "https://drive.google.com/" },
      { title: "Unit 2: Memory Management", link: "https://drive.google.com/" },
      { title: "Unit 3: File Systems", link: "https://drive.google.com/" },
    ],
  },
  {
    name: "Computer Networks",
    units: [
      { title: "Unit 1: OSI & TCP/IP", link: "https://drive.google.com/" },
      { title: "Unit 2: Routing & Switching", link: "https://drive.google.com/" },
      { title: "Unit 3: Transport Layer", link: "https://drive.google.com/" },
    ],
  },
];

export default function NotesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
          Notes Library
        </h1>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Subject-wise and unit-wise notes curated by students. All links open in
          Google Drive for read-only access.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {subjects.map((subject) => (
          <section
            key={subject.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              {subject.name}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {subject.units.map((unit) => (
                <li key={unit.title} className="flex items-center justify-between gap-3">
                  <span className="text-slate-700 dark:text-slate-200">{unit.title}</span>
                  <a
                    href={unit.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
                  >
                    View PDF
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
