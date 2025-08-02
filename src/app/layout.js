import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tharushi De Silva - Portfolio",
  description: "Full Stack Developer & Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 -z-50">
          {/* Consistent Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-700/60 to-pink-700/50"></div>
          
          {/* Subtle overlay for consistency */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}