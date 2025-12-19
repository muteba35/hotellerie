import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
 
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Rooms & Suites', path: '/rooms-suites-showcase', icon: 'Bed' },
    { name: 'Experiences', path: '/experiences-gallery', icon: 'Camera' },
    { name: 'Culinary', path: '/culinary-journey', icon: 'ChefHat' },
    { name: 'Contact', path: '/contact-booking-hub', icon: 'Phone' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-luxury shadow-elegant border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/homepage" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 elegant-transition">
                  <svg 
                    viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 11h8v2H8z" fill="var(--color-secondary)"/>
                    <path d="M10 8h4v2h-4z" fill="var(--color-secondary)"/>
                    <path d="M9 14h6v2H9z" fill="var(--color-secondary)"/>
                  </svg>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary elegant-transition">
                  Luxe Haven
                </h1>
                <p className="text-xs text-muted-foreground font-body tracking-wider uppercase">
                  Hotel
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`relative px-4 py-2 text-sm font-medium elegant-transition group ${
                    isActivePath(item?.path)
                      ? 'text-primary' :'text-foreground hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                  <div className="absolute inset-0 bg-muted rounded-lg scale-0 group-hover:scale-100 elegant-transition opacity-50" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Check Availability 
              </Button>
             
              {/* Reservation */}
              <Link to="/inscription">
              <Button 
                variant="default" size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Se connecter
              </Button>
               </Link>
         </div>
            

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-muted elegant-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="text-foreground"
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />
          <div className="absolute top-20 left-0 right-0 bg-background border-b border-border shadow-luxury">
            <nav className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={toggleMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg elegant-transition ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span className="font-medium">{item?.name}</span>
                  </Link>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3 border-t border-border">
                  <Button 
                    variant="outline" 
                    fullWidth
                    className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Check Disponibilité
                  </Button>
               <Link to="/inscription">
                  <Button 
                    variant="default" 
                    fullWidth
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Se connecter
                  </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;