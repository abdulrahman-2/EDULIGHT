import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authenticate to access EduLight",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" suppressHydrationWarning>
      <div className={`${poppins.className} antialiased`}>{children}</div>
    </main>
  );
}
