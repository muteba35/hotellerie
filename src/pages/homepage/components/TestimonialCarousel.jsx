import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CarrouselAvis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const avis = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "New York, NY",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Expérience Transformatrice",
      content: `Luxe Haven a dépassé toutes mes attentes. L'attention aux détails, des draps soigneusement sélectionnés au service de conciergerie personnalisé, a créé une expérience véritablement sur mesure.\n\nLa visite des vendanges d'automne était absolument magique - les connaissances et la passion de notre sommelier l'ont rendue inoubliable.`,
      experience: "Suite Patrimoine • Expérience Vendanges",
      date: "Octobre 2024",
      verified: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "San Francisco, CA",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Voyage d'Affaires Redéfini",
      content: `En tant que voyageur d'affaires fréquent, je peux affirmer que Luxe Haven établit la référence en matière d'hospitalité de luxe.\n\nL'enregistrement fluide, les équipements de classe mondiale et le service impeccable ont rendu mon séjour à la fois productif et ressourçant.`,
      experience: "Suite Exécutive • Services Business",
      date: "Novembre 2024",
      verified: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Londres, UK",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Anniversaire Parfait",
      content: `Notre 10ème anniversaire à Luxe Haven a été tout simplement magique. Chaque détail a été soigneusement orchestré pour créer des moments de véritable bonheur.\n\nLa retraite spa était le moyen parfait pour se reconnecter et célébrer notre jalon.`,
      experience: "Suite Romantique • Spa & Bien-être",
      date: "Septembre 2024",
      verified: true
    },
    {
      id: 4,
      name: "James Chen",
      location: "Singapour",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      title: "Immersion Culturelle",
      content: `La visite du patrimoine culturel m'a ouvert les yeux sur l'histoire riche et l'importance architecturale de la région. L'expertise de notre guide et l'accès exclusif aux sites historiques ont rendu ce voyage vraiment éducatif et inspirant.\n\nLuxe Haven ne se contente pas de fournir un hébergement – ils créent des expériences.`,
      experience: "Suite Jardin • Tour du Patrimoine Culturel",
      date: "Août 2024",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % avis?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, avis?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % avis?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + avis?.length) % avis?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const avisActuel = avis?.[currentIndex];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-wider uppercase mb-4">
            Témoignages Clients
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Expériences Authentiques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez ce qui rend Luxe Haven unique à travers les histoires de nos précieux clients.
          </p>
        </div>

        {/* Affichage du témoignage */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Motif en arrière-plan */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Icon name="Quote" size={128} className="text-secondary" />
            </div>

            {/* Étoiles de notation */}
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(avisActuel?.rating)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={20}
                  className="text-secondary fill-current"
                />
              ))}
            </div>

            {/* Titre du témoignage */}
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
              "{avisActuel?.title}"
            </h3>

            {/* Contenu du témoignage */}
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {avisActuel?.content}
              </p>
            </div>

            {/* Informations sur le client */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src={avisActuel?.avatar}
                  alt={avisActuel?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                {avisActuel?.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-success-foreground" />
                  </div>
                )}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">{avisActuel?.name}</h4>
                <p className="text-sm text-muted-foreground">{avisActuel?.location}</p>
                <p className="text-xs text-secondary font-medium">{avisActuel?.date}</p>
              </div>
            </div>

            {/* Détails de l'expérience */}
            <div className="bg-muted rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Expérience :</span> {avisActuel?.experience}
              </p>
            </div>

            {/* Contrôles de navigation */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 p-0"
                iconName="ChevronLeft"
              />
              
              {/* Indicateur de points */}
              <div className="flex items-center space-x-2">
                {avis?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full elegant-transition ${
                      index === currentIndex
                        ? 'bg-secondary' :'bg-border hover:bg-secondary/50'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-10 h-10 p-0"
                iconName="ChevronRight"
              />
            </div>
          </div>
        </div>

        {/* Indicateur de lecture automatique */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-muted-foreground hover:text-foreground elegant-transition flex items-center space-x-2 mx-auto"
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            <span>{isAutoPlaying ? "Pause" : "Lecture"} automatique</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarrouselAvis;
