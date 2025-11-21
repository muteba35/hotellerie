// Importation de React et des hooks pour gérer l'état et les effets
import React, { useState, useEffect } from 'react';

// Importation des composants réutilisables : Button et Image
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

// Déclaration du composant fonctionnel HeroSection
const HeroSection = () => {

  // Déclaration de l'état pour la saison actuelle, initialisée à 'automne' pour test
  const [saisonActuelle, setSaisonActuelle] = useState('été');

  // Objet contenant les contenus spécifiques pour chaque saison
  const contenusSaisonniers = {
    automne: {
      titre: "Vendanges d'automne",
      sousTitre: "Vivez la saison dorée du luxe",
      description: "Plongez dans la chaleur de l’automne avec nos expériences exclusives de vendanges et nos soirées conviviales au coin du feu.",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Découvrir l’automne"
    },
    hiver: {
      titre: "Sanctuaire d’hiver",
      sousTitre: "Savourez la saison de la tranquillité",
      description: "Retrouvez chaleur et confort dans notre refuge hivernal luxueux avec cheminées crépitantes et dîners intimistes.",
      image: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Évasion d’hiver"
    },
    printemps: {
      titre: "Éveil du printemps",
      sousTitre: "Fleurissez avec le renouveau de la nature",
      description: "Célébrez l’arrivée du printemps dans notre jardin paradisiaque avec des expériences culinaires fraîches et des aventures en plein air.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Voyage printanier"
    },
    été: {
      titre: "Terrasse d’été",
      sousTitre: "Profitez du luxe au coucher du soleil",
      description: "Savourez d’interminables soirées d’été sur notre terrasse avec repas en plein air et cocktails au coucher du soleil.",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Bonheur estival"
    }
  };

  // UseEffect pour déterminer automatiquement la saison selon le mois actuel
  // useEffect(() => {
  //   const mois = new Date()?.getMonth(); // getMonth() retourne un nombre de 0 à 11
  //   if (mois >= 2 && mois <= 4) setSaisonActuelle('printemps'); // Mars à Mai
  //   else if (mois >= 5 && mois <= 7) setSaisonActuelle('été');    // Juin à Août
  //   else if (mois >= 8 && mois <= 10) setSaisonActuelle('automne');// Septembre à Novembre
  //   else setSaisonActuelle('hiver');                               // Décembre à Février
  // }, [])

  // Récupère le contenu correspondant à la saison actuelle
  const contenuActuel = contenusSaisonniers?.[saisonActuelle];

  // Rendu JSX de la section Hero
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contenuActuel?.image} // Image dynamique selon la saison
          alt="Hôtel Luxe Haven"
          className="w-full h-full object-cover"
        />
        {/* Dégradés pour effet visuel */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-60" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40 delay-1000" />

      {/* Contenu principal (titre, sous-titre, description) */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Sous-titre de la saison */}
            <p className="text-secondary font-body text-sm md:text-base tracking-wider uppercase mb-4 opacity-90">
              {contenuActuel?.sousTitre}
            </p>
            {/* Titre principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Là où le luxe rencontre
              <span className="block text-secondary">l’authenticité</span>
            </h1>
            {/* Description */}
            <p className="text-lg md:text-xl text-primary-foreground/90 font-body leading-relaxed max-w-2xl mx-auto">
              {contenuActuel?.description}
            </p>
          </div>

          {/* Boutons d'action (CTA) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-medium"
              iconName="Calendar"
              iconPosition="left"
            >
              Réservez votre séjour
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium"
              iconName="Play"
              iconPosition="left"
            >
              Visite virtuelle
            </Button>
          </div>
        </div>
      </div>

      {/* Décorations parallaxe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary/20 rounded-full animate-pulse delay-500" />
      </div>
    </section>
  );
};

// Export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default HeroSection;
