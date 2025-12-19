import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import BookingEngine from './components/BookingEngine';
import ContactMethods from './components/ContactMethods';
import SpecialOccasions from './components/SpecialOccasions';
import GroupBooking from './components/GroupBooking';
import LoyaltyProgram from './components/LoyaltyProgram';
import BookingAssistance from './components/BookingAssistance';

const ContactBookingHub = () => {
  const [activeTab, setActiveTab] = useState('booking');

  const tabs = [
    { id: 'booking', label: 'Book Your Stay', icon: 'Calendar' },
    { id: 'contact', label: 'Contact Us', icon: 'MessageCircle' },
    { id: 'occasions', label: 'Special Occasions', icon: 'Heart' },
    { id: 'groups', label: 'Group Bookings', icon: 'Users' },
    { id: 'loyalty', label: 'Loyalty Program', icon: 'Award' },
    { id: 'assistance', label: 'Booking Assistance', icon: 'Headphones' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'booking':
        return <BookingEngine />;
      case 'contact':
        return <ContactMethods />;
      case 'occasions':
        return <SpecialOccasions />;
      case 'groups':
        return <GroupBooking />;
      case 'loyalty':
        return <LoyaltyProgram />;
      case 'assistance':
        return <BookingAssistance />;
      default:
        return <BookingEngine />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Booking Hub - Luxe Haven Hotel</title>
        <meta name="description" content="Book your luxury stay at Luxe Haven Hotel. Real-time availability, exclusive packages, and personalized service for unforgettable experiences." />
        <meta name="keywords" content="luxury hotel booking, Luxe Haven reservations, premium accommodation, special occasions, group bookings" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/90"></div>
          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Your Gateway to Luxury
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Seamless reservations, personalized service, and exclusive experiences await. 
                Let us craft your perfect stay at Luxe Haven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Icon name="Shield" size={20} />
                  <span>Best Rate Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Icon name="Clock" size={20} />
                  <span>24/7 Concierge Support</span>
                </div>
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <Icon name="Star" size={20} />
                  <span>Exclusive Member Benefits</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-card border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-6">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap elegant-transition border-b-2 ${
                    activeTab === tab?.id
                      ? 'border-secondary text-secondary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {renderTabContent()}
          </div>
        </main>

        {/* Quick Contact Bar */}
        <section className="bg-muted border-t border-border py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-center font-heading font-semibold text-xl mb-6">
                Need Immediate Assistance?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1">Call Direct</h4>
                  <p className="text-muted-foreground text-sm mb-2">24/7 Concierge Service</p>
                  <p className="font-medium text-primary">+1 (555) 123-LUXE</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm mb-2">Response within 2 hours</p>
                  <p className="font-medium text-secondary">reservations@luxehaven.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1">Live Chat</h4>
                  <p className="text-muted-foreground text-sm mb-2">Instant booking help</p>
                  <p className="font-medium text-success">Available now</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Location */}
                <div>
                  <h3 className="font-heading font-semibold text-2xl mb-6">Visit Us</h3>
                  <div className="luxury-card p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" size={20} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Address</h4>
                          <p className="text-muted-foreground">
                            123 Ocean Drive<br />
                            Luxury Bay, CA 90210<br />
                            United States
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Icon name="Clock" size={20} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Front Desk Hours</h4>
                          <p className="text-muted-foreground">
                            24 hours a day, 7 days a week<br />
                            Check-in: 3:00 PM<br />
                            Check-out: 12:00 PM
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Icon name="Car" size={20} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Transportation</h4>
                          <p className="text-muted-foreground">
                            Complimentary valet parking<br />
                            Airport shuttle service<br />
                            Tesla charging stations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div>
                  <h3 className="font-heading font-semibold text-2xl mb-6">Find Us</h3>
                  <div className="luxury-card overflow-hidden">
                    <div className="h-80 w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title="Luxe Haven Hotel Location"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=34.0522,-118.2437&z=14&output=embed"
                        className="border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-8 h-8 text-secondary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 11h8v2H8z" fill="var(--color-primary)"/>
                    <path d="M10 8h4v2h-4z" fill="var(--color-primary)"/>
                    <path d="M9 14h6v2H9z" fill="var(--color-primary)"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold">Luxe Haven</h3>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Where luxury meets authenticity. Every stay is crafted to create memories 
                that last a lifetime, with personalized service that exceeds expectations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span>© {new Date()?.getFullYear()} Luxe Haven Hotel</span>
                <span>•</span>
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms of Service</span>
                <span>•</span>
                <span>Accessibility</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactBookingHub;