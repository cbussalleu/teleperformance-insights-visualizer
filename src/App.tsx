
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioVisibilityPage from "./pages/PortfolioVisibilityPage";
import ClientLifecyclePage from "./pages/ClientLifecyclePage";
import ExpansionOpportunitiesPage from "./pages/ExpansionOpportunitiesPage";
import AccountManagementPage from "./pages/AccountManagementPage";
import CompetitivePositioningPage from "./pages/CompetitivePositioningPage";
import WhiteSpacePage from "./pages/WhiteSpacePage";
import MessagingFrameworkPage from "./pages/MessagingFrameworkPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio-visibility" element={<PortfolioVisibilityPage />} />
          <Route path="/client-lifecycle" element={<ClientLifecyclePage />} />
          <Route path="/expansion-opportunities" element={<ExpansionOpportunitiesPage />} />
          <Route path="/account-management" element={<AccountManagementPage />} />
          <Route path="/competitive-positioning" element={<CompetitivePositioningPage />} />
          <Route path="/white-space" element={<WhiteSpacePage />} />
          <Route path="/messaging-framework" element={<MessagingFrameworkPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
