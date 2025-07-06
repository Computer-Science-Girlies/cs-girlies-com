import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import Resources from "./pages/Resources";
import Donate from "./pages/Donate";
import HackathonPage from './pages/Hackathon';
import SponsorshipPage from './pages/Sponsorship';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/hackathon" element={<HackathonPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
