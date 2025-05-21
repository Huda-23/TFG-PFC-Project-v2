// src/app/app/layout.tsx
import NavbarApp from "@/components/appComponents/navbarApp";
import NavbarActores from "@/components/appComponents/navbarActores";
import Footer from "@/components/appComponents/footerApp";
import "@/app/globals.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-inter bg-white antialiased pt-18">
      <NavbarApp />
      <NavbarActores />
      <div className="pt-[20px] bg-gray-50">{children}</div>
      <Footer />
    </div>
  );
}
