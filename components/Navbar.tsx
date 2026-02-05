import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">
          Shiroya Study Hub
        </h1>
        <div className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
