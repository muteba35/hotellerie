//footer
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  const contactInfo = {
    address: "123 Avenue du Luxe, Quartier Héritage, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "reservations@luxehaven.com",
    hours: "Service Conciergerie 24h/24 et 7j/7"
  };

  

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contenu Principal du Footer */}
      <div className="container mx-auto px-6 py-16">

        {/* Informations de Contact */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                Adresse
              </h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {contactInfo?.address}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                Téléphone
              </h4>
              <a 
                href={`tel:${contactInfo?.phone}`}
                className="text-sm text-primary-foreground/80 hover:text-secondary elegant-transition"
              >
                {contactInfo?.phone}
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                Email
              </h4>
              <a 
                href={`mailto:${contactInfo?.email}`}
                className="text-sm text-primary-foreground/80 hover:text-secondary elegant-transition"
              >
                {contactInfo?.email}
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Service
              </h4>
              <p className="text-sm text-primary-foreground/80">
                {contactInfo?.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Réseaux Sociaux & Actions Rapides */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Réseaux Sociaux */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/70 mr-2">Suivez-nous :</span>
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center elegant-transition group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-primary-foreground/70 group-hover:text-secondary-foreground" 
                  />
                </a>
              ))}
            </div>

            {/* Actions Rapides */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                iconName="Phone"
                iconPosition="left"
              >
                Appeler Maintenant
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                iconName="Calendar"
                iconPosition="left"
              >
                Réserver
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Barre du Bas */}
      <div className="border-t border-primary-foreground/20 bg-primary/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <p>&copy; {currentYear} Hôtel Luxe Haven. Tous droits réservés.</p>
              <span className="hidden md:inline">|</span>
              <p className="hidden md:inline">Un savoir-faire d’exception depuis 1985</p>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} />
                <span>Sécurisé SSL</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} />
                <span>Classé 5 Étoiles</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Award" size={14} />
                <span>Récompensé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
