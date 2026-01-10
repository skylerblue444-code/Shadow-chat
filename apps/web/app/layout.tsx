import "./globals.css";
import Footer from "@/components/Footer";
import "@/styles/animations.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      <Footer />
</body>
    </html>
  );
}