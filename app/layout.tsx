import type { Metadata } from "next";

import { Lato } from 'next/font/google';




export const metadata: Metadata = {
  title: "Eventogy - Static",
  description: "",
};

import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: "--font-lato",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body className="h-100vh bg-gray-50">
        <div className="p-8 h-full">
          {children}
        </div>
      </body>
    </html>
  );
}


