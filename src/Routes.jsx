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
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
    
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
