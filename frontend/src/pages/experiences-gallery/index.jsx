import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroVideoSection from './components/HeroVideoSection';
import ExperienceCategories from './components/ExperienceCategories';
import GuestStoriesSection from './components/GuestStoriesSection';
import ExperienceBuilder from './components/ExperienceBuilder';
import LocalPartnerships from './components/LocalPartnerships';

const ExperiencesGallery = () => {
  return (
    <>
      <Helmet>
        <title>Experiences Gallery - Luxe Haven Hotel | Curated Cultural & Culinary Journeys</title>
        <meta 
          name="description" 
          content="Discover exclusive experiences at Luxe Haven Hotel. From private museum tours to chef's table dining, wellness retreats to cultural immersion - create unforgettable memories through our curated experience collections." 
        />
        <meta name="keywords" content="luxury hotel experiences, cultural tours, culinary experiences, wellness retreats, private museum tours, chef's table dining, exclusive access, local partnerships" />
        <meta property="og:title" content="Experiences Gallery - Luxe Haven Hotel" />
        <meta property="og:description" content="Explore our curated collection of exclusive experiences designed to transform your stay into an unforgettable journey of discovery and luxury." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/experiences-gallery" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Video Section */}
        <HeroVideoSection />
        
        {/* Experience Categories */}
        <ExperienceCategories />
        
        {/* Guest Stories Section */}
        <GuestStoriesSection />
        
        {/* Experience Builder */}
        <ExperienceBuilder />
        
        {/* Local Partnerships */}
        <LocalPartnerships />
      </div>
    </>
  );
};

export default ExperiencesGallery;