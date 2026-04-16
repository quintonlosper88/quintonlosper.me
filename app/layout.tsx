import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "QML",
  description: "Quinton Losper Personal Profile",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Moving Navbar inside the body and ThemeProvider */}
          <header className="fixed top-0 left-0 w-full z-50 container mx-auto py-5 px-6 md:px-16 text-end">
            <Navbar />
          </header>

          {/* Main content needs a top margin/padding so it doesn't hide under the fixed navbar */}
          <main className="flex-grow pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
