import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Shiroya Study Hub",
  description: "By students, for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
