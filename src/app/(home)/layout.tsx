import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import StoreProvider from "@/components/layout/StoreProvider";
import Header from "@/components/layout/home/header/Header";
import Footer from "@/components/layout/home/Footer";
import AuthInitializer from "@/components/layout/AuthInitializer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EDULIGHT",
  description: "education platform",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" suppressHydrationWarning>
      <div className={`${poppins.className} antialiased`}>
        <StoreProvider>
          <AuthInitializer />
          {/* User */}
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </div>
    </main>
  );
}
