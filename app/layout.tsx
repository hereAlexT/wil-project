import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
const inter = Inter({ subsets: ["latin"] });
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Social Awareness",
  description: "Social Awareness is a platform for sharing and discussing social issues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            {children}
            <Footer />
          </div>

        </Theme>
      </body>

    </html >
  );
}
