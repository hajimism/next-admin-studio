import type { Metadata } from "next";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "Next Admin Studio",
  description:
    "Admin app made with Next.js, Mantine UI, and scaffdog templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
