import { Header } from "./Header";
import { Footer } from "./Footer";
import { IntroLoader } from "@/components/animations/IntroLoader";
import { ScrollToTop } from "@/components/animations/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <IntroLoader />
      <Header />
      <main className="pt-[73px]">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
