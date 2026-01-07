import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import RoomsSuitesShowcase from './pages/rooms-suites-showcase';
import ContactBookingHub from './pages/contact-booking-hub';
import CulinaryJourney from './pages/culinary-journey';
import ExperiencesGallery from './pages/experiences-gallery';
import Homepage from './pages/homepage';
import Inscription from './pages/inscription';
import Connexion from './pages/connexion';
import Attente from './pages/attente';
import Attente from './pages/verification_email';
import Verification_email from "pages/verification_email";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ContactBookingHub />} />
        <Route path="/rooms-suites-showcase" element={<RoomsSuitesShowcase />} />
        <Route path="/contact-booking-hub" element={<ContactBookingHub />} />
        <Route path="/culinary-journey" element={<CulinaryJourney />} />
        <Route path="/experiences-gallery" element={<ExperiencesGallery />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/attente" element={<Attente />} />
        <Route path="/verification_email" element={<Verification_email />} />
       
    
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
