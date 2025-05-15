// src/app/landing/layout.tsx
import Navbar from "@/components/navbarLanding";
import Footer from "@/components/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-inter scroll-smooth antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
