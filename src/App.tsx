import { useEffect } from 'react';
import { analytics } from './firebase.js';
import { logEvent } from 'firebase/analytics';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import Industry from "./pages/Industry";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BeyondTheDesk from "./pages/BeyondTheDesk";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/research" element={<Research />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/beyond-the-desk" element={<BeyondTheDesk />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
