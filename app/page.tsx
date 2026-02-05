export default function Home() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-4">
        By students, for students
      </h2>

      <p className="text-gray-600 mb-10">
        Notes, tools, and exam resources — all in one place.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          📚 <h3 className="font-semibold mt-2">Notes</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          🛠 <h3 className="font-semibold mt-2">Tools</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          📝 <h3 className="font-semibold mt-2">Exams</h3>
        </div>
      </div>
    </section>
  );
}
