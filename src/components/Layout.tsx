import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="px-6 mx-auto lg:w-10/12">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
