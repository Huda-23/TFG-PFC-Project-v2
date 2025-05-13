// src/app/landing/layout.tsx
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Aquí puedes meter NavbarLanding si quieres */}
        {children}
        {/* Y también FooterLanding */}
      </body>
    </html>
  );
}
