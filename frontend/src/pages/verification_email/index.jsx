import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const Verification_email = () => {
   
  return (
    <>
      <Helmet>
        <title>Hôtel Luxe Haven - Là où le luxe rencontre l’authenticité</title>
        <meta 
          name="description" 
          content="Découvrez un luxe raffiné à l’Hôtel Luxe Haven. Profitez d’une hospitalité unique avec des expériences saisonnières, des services de classe mondiale et un accueil personnalisé au cœur de New York." 
        />
        <meta 
          name="keywords" 
          content="hôtel de luxe, hôtel boutique, hôtel New York, hébergement premium, voyage de luxe, expériences hôtelières" 
        />
        <meta property="og:title" content="Hôtel Luxe Haven - Là où le luxe rencontre l’authenticité" />
        <meta property="og:description" content="Découvrez le luxe raffiné à l’Hôtel Luxe Haven avec des expériences saisonnières et des services haut de gamme." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxehaven.com" />
        <link rel="canonical" href="https://luxehaven.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation Header */}
        <Header />

        {/* Contenu principal */}
        <main>
        {/* Section Héro avec expérience immersive */}
          <HeroSection />
         
        </main>

        {/* Pied de page */}
        <Footer />

      </div>
    </>
  );
};

export default Verification_email;
