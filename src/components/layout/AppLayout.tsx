import React, { ReactNode} from "react";
import Header from "./Header";

type AppLayoutProps = {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {children}
      </main>
    </div>
  );
}
