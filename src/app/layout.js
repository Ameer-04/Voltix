
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Voltix | Everyday tech, considered",
    template: "%s | Voltix",
  },
  description:
    "Discover laptops, electronics, and accessories at Voltix.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col text-slate-950 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}