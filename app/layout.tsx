import type { Metadata } from "next";
import { Ubuntu, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";

const ubuntu_sans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu-sans",
  weight: ["300", "400", "500", "700"],
});

const noto_sans_khmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  variable: "--font-noto-sans-khmer",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Blog post",
  description: "Generate by Mr.Lyheang dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu_sans.variable} ${noto_sans_khmer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
