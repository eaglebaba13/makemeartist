import { ReactNode } from "react";
import SiteNav from "./SiteNav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteNav />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default SiteLayout;
