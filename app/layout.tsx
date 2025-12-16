import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Business Logo",
  description: "Professional business agent logo in a modern, minimalist style."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
