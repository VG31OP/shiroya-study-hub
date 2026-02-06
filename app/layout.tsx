import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Shiroya Study Hub",
  description:
    "By students, for students. Notes, tools, and exam resources in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 pb-16 pt-8">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
