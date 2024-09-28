import '@/app/ui/global.css'; // Global CSS
import { inter } from '@/app/ui/fonts'; // Correct import path to font.ts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
