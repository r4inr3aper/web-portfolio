import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "bedanta • portfolio",
  description: "semicolon dev • student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between">
        <main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
          <Header />
          <div className="flex flex-col gap-12 w-full h-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
