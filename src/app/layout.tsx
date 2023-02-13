"use client";

import { ThemeToggle } from "@components/theme-toggle";
import "../styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/stu1cat.css" />
      </head>
      <body className="flex h-screen flex-col bg-black bg-[url('/assets/images/bg-pattern.svg')] p-6">
        <ThemeToggle />
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-white border-opacity-5 bg-card p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
