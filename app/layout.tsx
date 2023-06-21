import Header from "@/components/modules/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/modules/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Kit",
  description: "Learn kit for developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
