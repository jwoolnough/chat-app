"use client";

import { ThemeToggle } from "@components/theme-toggle";
import { clsxm } from "@utils/clsxm";
import "../styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head>
        <title>React Chat App</title>
        <link rel="stylesheet" href="https://use.typekit.net/stu1cat.css" />
      </head>
      <body className={clsxm(
          "flex h-screen flex-col bg-background dark:bg-black p-6",
          "before:bg-[url('/assets/images/bg-pattern.svg')] before:opacity-10 dark:before:opacity-5 before:absolute before:inset-0")}>
        <ThemeToggle />
        <div className="relative flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-white dark:border-opacity-5 bg-card dark:bg-card-dark p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
