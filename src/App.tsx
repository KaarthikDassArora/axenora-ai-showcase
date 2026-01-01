import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import WebsiteDevelopmentPage from "./pages/solutions/WebsiteDevelopmentPage";
import AdsMarketingPage from "./pages/solutions/AdsMarketingPage";
import WhatsAppAutomationPage from "./pages/solutions/WhatsAppAutomationPage";
import ChatbotsPage from "./pages/solutions/ChatbotsPage";
import CallingAgentsPage from "./pages/solutions/CallingAgentsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/solutions/ads-marketing" element={<AdsMarketingPage />} />
            <Route path="/solutions/whatsapp-automation" element={<WhatsAppAutomationPage />} />
            <Route path="/solutions/chatbots" element={<ChatbotsPage />} />
            <Route path="/solutions/calling-agents" element={<CallingAgentsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
