import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About me",
  description: "MY first project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return 
    <html>
       lang="en"
       suppressingHydrationWarming;
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >{children}
          </ThemeProvider>
          </body>
    </html>
}
