import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import StoreProvider from "@/components/layout/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            User
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
