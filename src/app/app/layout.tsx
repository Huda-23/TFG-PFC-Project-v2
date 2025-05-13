// src/app/app/layout.tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* NavbarApp u otros wrappers */}
        {children}
      </body>
    </html>
  );
}
