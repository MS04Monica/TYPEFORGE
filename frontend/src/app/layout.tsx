import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TYPEFORGE",
  description:
    "A progressive DSA learning system that adapts to how you learn, think, and improve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}