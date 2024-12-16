import type { Metadata } from "next";


import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eventogy - Static",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="h-100vh bg-gray-50">
        <div className="p-8 h-full">
          {children}
        </div>
      </body>
    </html>
  );
}


