// Importation de React pour pouvoir créer des composants
import React from 'react';

// Importation du composant Link pour naviguer entre les pages (react-router-dom)
import { Link } from 'react-router-dom';

// Importation d'un composant bouton personnalisé
import Button from '../../../components/ui/Button';

// Importation d'un composant image personnaliséblo
import Image from '../../../components/AppImage';

// Déclaration du composant fonctionnel SeasonalOfferings
const SeasonalOfferings = () => {

  // Définition d'un tableau d'offres saisonnières
  const offres = [
    {
      id: 1, // Identifiant unique de l'offre
      title: "Expérience Vendanges d’Automne", // Titre de l'offre
      description: "Rejoignez notre sommelier pour une visite exclusive du vignoble et une dégustation de sélections rares issues de notre cave privée.", // Description de l'offre
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop", // URL de l'image
      price: "À partir de 450 $", // Prix de l'offre
      duration: "4 heures", // Durée de l'expérience
      category: "Expérience", // Catégorie de l'offre
      highlights: ["Visite privée du vignoble", "Dégustation de vins", "Accords gourmets"], // Points forts
      available: true // Disponibilité
    },
    {
      id: 2,
      title: "Retraite Spa & Bien-être",
      description: "Profitez de notre parcours bien-être signature incluant des soins thérapeutiques inspirés des traditions anciennes de guérison.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "À partir de 320 $",
      duration: "3 heures",
      category: "Bien-être",
      highlights: ["Massage signature", "Aromathérapie", "Relaxation privée"],
      available: true
    },
    {
      id: 3,
      title: "Visite du Patrimoine Culturel",
      description: "Découvrez l’histoire riche et les merveilles architecturales de notre région avec notre guide culturel expert et un accès exclusif.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "À partir de 280 $",
      duration: "5 heures",
      category: "Culture",
      highlights: ["Guide expert", "Accès exclusif", "Aperçus historiques"],
      available: true
    }
  ];

  // Retourne le JSX qui sera affiché à l'écran
  return (
    <section className="py-20 bg-background"> {/* Section principale avec padding et background */}
      <div className="container mx-auto px-6"> {/* Conteneur centré avec padding horizontal */}

        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-wider uppercase mb-4">
            Expériences Sélectionnées
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Offres Saisonnières
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez nos expériences saisonnières soigneusement sélectionnées pour créer des moments inoubliables lors de votre séjour.
          </p>
        </div>

        {/* Grille des offres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offres?.map((offre) => ( // Utilisation de map pour parcourir chaque offre
            <div
              key={offre?.id} // Clé unique pour chaque élément, obligatoire en React
              className="luxury-card group cursor-pointer luxury-hover"
            >
              {/* Image de l'offre */}
              <div className="relative overflow-hidden rounded-t-lg h-64">
                <Image
                  src={offre?.image} // URL de l'image
                  alt={offre?.title} // Texte alternatif pour l'image
                  className="w-full h-full object-cover group-hover:scale-105 elegant-transition" // Styles et effet zoom au survol
                />
                {/* Dégradé sur l'image au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 elegant-transition" />
                
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {offre?.category}
                  </span>
                </div>

                {/* Badge disponibilité */}
                {offre?.available && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-success text-success-foreground px-2 py-1 rounded-full text-xs">
                      <div className="w-2 h-2 bg-success-foreground rounded-full" />
                      <span>Disponible</span>
                    </div>
                  </div>
                )}

                {/* Bouton au survol de l'image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 elegant-transition">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Réserver l’expérience
                  </Button>
                </div>
              </div>

              {/* Contenu texte de la carte */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary elegant-transition">
                    {offre?.title} {/* Titre de l'offre */}
                  </h3>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-primary">{offre?.price}</p> {/* Prix */}
                    <p className="text-sm text-muted-foreground">{offre?.duration}</p> {/* Durée */}
                  </div>
                </div>

                {/* Description de l'offre */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {offre?.description}
                </p>

                {/* Points forts de l'offre */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {offre?.highlights?.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {highlight} {/* Affiche chaque point fort */}
                    </span>
                  ))}
                </div>

                {/* Boutons d'action */}
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    En savoir plus
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    iconName="Calendar"
                  >
                    Réserver
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton pour voir toutes les expériences */}
        <div className="text-center mt-12">
          <Link to="/experiences-gallery">
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground px-8"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explorer toutes les expériences
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default SeasonalOfferings;
