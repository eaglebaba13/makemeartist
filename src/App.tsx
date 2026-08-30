import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/site/ScrollToTop";
import Index from "./pages/Index.tsx";
import Courses from "./pages/Courses.tsx";
import ProfessionalBeautyArtistProgram from "./pages/ProfessionalBeautyArtistProgram.tsx";
import AdvancedBeautyEntrepreneurProgram from "./pages/AdvancedBeautyEntrepreneurProgram.tsx";
import LookAndLearn from "./pages/LookAndLearn.tsx";
import PartnerAcademy from "./pages/PartnerAcademy.tsx";
import FindJobs from "./pages/FindJobs.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import HairArtistDelhiOnlineClass from "./pages/HairArtistDelhiOnlineClass.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/professional-beauty-artist" element={<ProfessionalBeautyArtistProgram />} />
          <Route path="/courses/advanced-beauty-entrepreneur" element={<AdvancedBeautyEntrepreneurProgram />} />
          <Route path="/look-and-learn" element={<LookAndLearn />} />
          <Route path="/partner-academy" element={<PartnerAcademy />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hair-artist-delhi-online-class" element={<HairArtistDelhiOnlineClass />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
