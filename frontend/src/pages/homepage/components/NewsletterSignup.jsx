import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [estAbonne, setEstAbonne] = useState(false);
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!email) {
      setErreur('Veuillez saisir votre adresse e-mail');
      return;
    }

    if (!email?.includes('@')) {
      setErreur('Veuillez saisir une adresse e-mail valide');
      return;
    }

    setEnCours(true);
    setErreur('');

    // Simulation d'appel API
    setTimeout(() => {
      setEstAbonne(true);
      setEnCours(false);
      setEmail('');
    }, 1500);
  };

  const avantages = [
    {
      icon: 'Star',
      titre: 'Offres Exclusives',
      description: 'Accès prioritaire aux offres saisonnières et tarifs réservés aux membres'
    },
    {
      icon: 'Calendar',
      titre: 'Réservation Anticipée',
      description: 'Priorité sur les réservations pour événements et expériences spéciales'
    },
    {
      icon: 'Gift',
      titre: 'Avantages Surprise',
      description: 'Upgrades gratuits et services personnalisés'
    }
  ];

  if (estAbonne) {
    return (
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-success-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Bienvenue dans la famille !
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Merci pour votre inscription. Vous recevrez bientôt notre guide saisonnier exclusif et nos offres réservées aux membres dans votre boîte e-mail.
            </p>
            <Button
              variant="outline"
              onClick={() => setEstAbonne(false)}
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              S’abonner avec une autre adresse
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <p className="text-secondary font-body text-sm tracking-wider uppercase mb-4">
              Accès exclusif
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Rejoignez notre cercle privilégié
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Abonnez-vous pour recevoir des expériences saisonnières exclusives, un accès réservé aux membres et des conseils personnalisés pour vos voyages de luxe.
            </p>
          </div>

          {/* Grille des avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {avantages?.map((avantage, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 elegant-transition">
                  <Icon 
                    name={avantage?.icon} 
                    size={24} 
                    className="text-secondary-foreground" 
                  />
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">
                  {avantage?.titre}
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {avantage?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Formulaire Newsletter */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Saisissez votre adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                error={erreur}
                className="bg-primary-foreground text-primary"
                required
              />
              
              <Button
                type="submit"
                variant="default"
                fullWidth
                loading={enCours}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3"
                iconName="Mail"
                iconPosition="left"
              >
                {enCours ? 'Inscription en cours...' : 'S’abonner'}
              </Button>
            </form>

            {/* Notice de confidentialité */}
            <div className="mt-6 text-center">
              <p className="text-xs text-primary-foreground/70 leading-relaxed">
                En vous abonnant, vous acceptez de recevoir des e-mails marketing de Luxe Haven. 
                Vous pouvez vous désabonner à tout moment. Nous respectons votre vie privée et ne partagerons jamais vos informations.
              </p>
            </div>

            {/* Indicateurs de confiance */}
            <div className="mt-8 flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Icon name="Shield" size={16} />
                <span className="text-xs">Sécurisé</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Icon name="Lock" size={16} />
                <span className="text-xs">Privé</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/60">
                <Icon name="UserX" size={16} />
                <span className="text-xs">Pas de spam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
