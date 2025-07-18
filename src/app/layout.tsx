import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/layout/StoreProvider";
import Notifications from "@/components/layout/Notifications";
import AuthInitializer from "@/components/layout/AuthInitializer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EDULIGHT",
  description: "Platform for Learning and Teaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <StoreProvider>
          {children}
          <AuthInitializer />
          <Notifications />
        </StoreProvider>
      </body>
    </html>
  );
}
