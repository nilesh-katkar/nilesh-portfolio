import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'nileshkatkar-dev · Full Stack Developer',
  description: 'Software engineer specialised in .NET Core, Azure, and Angular.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
