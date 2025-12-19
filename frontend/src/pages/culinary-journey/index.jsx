import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ChefPortrait from './components/ChefPortrait';
import SeasonalMenu from './components/SeasonalMenu';
import VirtualTasting from './components/VirtualTasting';
import FarmToTable from './components/FarmToTable';
import PrivateDining from './components/PrivateDining';
import CulinaryCalendar from './components/CulinaryCalendar';
import GuestReviews from './components/GuestReviews';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CulinaryJourney = () => {
  return (
    <>
      <Helmet>
        <title>Culinary Journey - Luxe Haven Hotel</title>
        <meta name="description" content="Embark on an extraordinary culinary journey at Luxe Haven. Experience award-winning cuisine, exclusive chef's table dining, and immersive culinary events that celebrate the art of exceptional gastronomy." />
        <meta name="keywords" content="fine dining, chef's table, culinary experiences, wine tasting, cooking classes, private dining, farm to table, luxury restaurant" />
        <meta property="og:title" content="Culinary Journey - Luxe Haven Hotel" />
        <meta property="og:description" content="Discover exceptional cuisine and immersive culinary experiences at Luxe Haven's award-winning restaurant." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="cinematic-hero bg-gradient-to-br from-primary via-primary/90 to-accent">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Icon name="ChefHat" size={48} className="text-secondary" />
                  <div className="h-12 w-px bg-secondary/50" />
                  <Icon name="Utensils" size={48} className="text-secondary" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground text-balance">
                  Culinary Journey
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                  Where Artistry Meets Flavor
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Embark on an extraordinary culinary adventure that celebrates the finest ingredients, 
                masterful techniques, and the passionate artistry of our award-winning culinary team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 min-w-[200px]"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Reserve Your Table
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px]"
                  iconName="Play"
                  iconPosition="left"
                >
                  Watch Our Story
                </Button>
              </div>
              
              {/* Floating Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-secondary mb-2">15+</div>
                  <p className="text-sm text-primary-foreground/80">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-secondary mb-2">5★</div>
                  <p className="text-sm text-primary-foreground/80">Michelin Recognition</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-secondary mb-2">12</div>
                  <p className="text-sm text-primary-foreground/80">Local Producers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-secondary mb-2">98%</div>
                  <p className="text-sm text-primary-foreground/80">Guest Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-primary-foreground/60" />
          </div>
        </section>

        {/* Chef Portrait Section */}
        <ChefPortrait />

        {/* Seasonal Menu Section */}
        <SeasonalMenu />

        {/* Virtual Tasting Section */}
        <VirtualTasting />

        {/* Farm to Table Section */}
        <FarmToTable />

        {/* Private Dining Section */}
        <PrivateDining />

        {/* Culinary Calendar Section */}
        <CulinaryCalendar />

        {/* Guest Reviews Section */}
        <GuestReviews />

        {/* Final Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-heading font-bold">
                  Begin Your Culinary Adventure
                </h2>
                <p className="text-xl opacity-90">
                  Every meal is a story waiting to be told. Let us create your next unforgettable chapter.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default"
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Make Reservation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call Restaurant
                </Button>
              </div>
              
              <div className="pt-8 border-t border-primary-foreground/20">
                <p className="text-sm opacity-80 mb-4">Connect with us</p>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="hover:text-secondary elegant-transition">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="#" className="hover:text-secondary elegant-transition">
                    <Icon name="Facebook" size={24} />
                  </a>
                  <a href="#" className="hover:text-secondary elegant-transition">
                    <Icon name="Twitter" size={24} />
                  </a>
                  <a href="#" className="hover:text-secondary elegant-transition">
                    <Icon name="Youtube" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="ChefHat" size={20} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Luxe Haven</h3>
                    <p className="text-sm opacity-80">Culinary Excellence</p>
                  </div>
                </div>
                <p className="text-sm opacity-80">
                  Creating extraordinary culinary experiences that celebrate the art of exceptional gastronomy.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Restaurant</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="#" className="hover:text-secondary elegant-transition">Reservations</a></li>
                  <li><a href="#" className="hover:text-secondary elegant-transition">Menu</a></li>
                  <li><a href="#" className="hover:text-secondary elegant-transition">Private Dining</a></li>
                  <li><a href="#" className="hover:text-secondary elegant-transition">Events</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Experiences</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="#" className="hover:text-secondary elegant-transition">Chef's Table</a></li>
                  <li><a href="#" className="hover:text-secondary elegant-transition">Wine Tastings</a></li>
                  <li><a href="#" className="hover:text-secondary elegant-transition">Cooking Classes</a></li>
                  <li><a href="#" className="hover:text-secondary elegant-transition">Culinary Tours</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <p className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>dining@luxehaven.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>123 Culinary Ave</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-background/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-60">
                © {new Date()?.getFullYear()} Luxe Haven Hotel. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CulinaryJourney;