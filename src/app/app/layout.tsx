// src/app/app/layout.tsx
import NavbarApp from "@/components/appComponents/navbarApp";
import Footer from "@/components/appComponents/footerApp";
import "@/app/globals.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-inter bg-white antialiased">
        <NavbarApp />
        <div className="pt-[80px] bg-gray-50">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
