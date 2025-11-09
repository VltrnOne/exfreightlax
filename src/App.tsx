
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Trucking from "./pages/Trucking";
import LTLFreight from "./pages/LTLFreight";
import FTLTrucking from "./pages/FTLTrucking";
import AirFreight from "./pages/AirFreight";
import InternationalSmallParcel from "./pages/InternationalSmallParcel";
import OceanFreight from "./pages/OceanFreight";
import FCLServices from "./pages/FCLServices";
import LCLShipping from "./pages/LCLShipping";
import AmazonFBA from "./pages/AmazonFBA";
import CargoInsurance from "./pages/CargoInsurance";
import HowToShip from "./pages/HowToShip";
import HowToShipGuide from "./pages/HowToShipGuide";
import HowToShipVideos from "./pages/HowToShipVideos";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-services/trucking" element={<Trucking />} />
            <Route path="/our-services/trucking/ltl-freight" element={<LTLFreight />} />
            <Route path="/our-services/trucking/ftl-trucking" element={<FTLTrucking />} />
            <Route path="/our-services/air-freight" element={<AirFreight />} />
            <Route path="/international-small-parcel-shipping" element={<InternationalSmallParcel />} />
            <Route path="/our-services/ocean-freight" element={<OceanFreight />} />
            <Route path="/our-services/ocean-freight/fcl-services" element={<FCLServices />} />
            <Route path="/our-services/ocean-freight/lcl-shipping" element={<LCLShipping />} />
            <Route path="/our-services/amazon-fba" element={<AmazonFBA />} />
            <Route path="/cargo-insurance" element={<CargoInsurance />} />
            <Route path="/how-to-ship" element={<HowToShip />} />
            <Route path="/how-to-ship-guide" element={<HowToShipGuide />} />
            <Route path="/how-to-ship-videos" element={<HowToShipVideos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
