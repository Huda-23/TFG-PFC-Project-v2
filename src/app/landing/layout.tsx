// src/app/landing/layout.tsx
import Navbar from "@/components/navbarLanding";
import Footer from "@/components/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
