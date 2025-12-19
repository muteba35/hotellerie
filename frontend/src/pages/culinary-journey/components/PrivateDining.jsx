import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PrivateDining = () => {
  const [selectedVenue, setSelectedVenue] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const privateDiningVenues = [
    {
      id: 1,
      name: "Chef\'s Table",
      subtitle: "Intimate Kitchen Theater",
      capacity: "2-8 guests",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Experience culinary artistry up close at our exclusive chef's table, where you'll witness the magic of our kitchen while enjoying a personalized tasting menu.",
      features: [
        "Front-row view of kitchen operations",
        "Personal interaction with Chef Marcus",
        "Customized tasting menu",
        "Wine pairing with sommelier",
        "Behind-the-scenes kitchen tour",
        "Recipe cards to take home"
      ],
      pricing: {
        weekday: "$250 per person",
        weekend: "$295 per person",
        minimum: "2 guests required"
      },
      duration: "3-4 hours",
      availability: "Tuesday - Saturday, 6:00 PM",
      specialties: ["Interactive cooking demonstration", "Personalized menu creation", "Wine education"]
    },
    {
      id: 2,
      name: "Wine Cellar Dining",
      subtitle: "Underground Elegance",
      capacity: "4-12 guests",
      image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Dine surrounded by our extensive wine collection in an intimate underground setting that combines rustic charm with sophisticated elegance.",
      features: [
        "Temperature-controlled wine cellar",
        "Extensive vintage collection access",
        "Sommelier-guided wine journey",
        "Artisan cheese and charcuterie",
        "Private wine tasting",
        "Exclusive vintage selections"
      ],
      pricing: {
        weekday: "$195 per person",
        weekend: "$225 per person",
        minimum: "4 guests required"
      },
      duration: "2.5-3 hours",
      availability: "Wednesday - Sunday, 7:00 PM",
      specialties: ["Rare wine tastings", "Vintage collection tours", "Cheese & wine pairings"]
    },
    {
      id: 3,
      name: "Garden Pavilion",
      subtitle: "Al Fresco Luxury",
      capacity: "6-20 guests",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Celebrate special occasions in our enchanting garden pavilion, where seasonal blooms and twinkling lights create the perfect backdrop for memorable gatherings.",
      features: [
        "Seasonal garden setting",
        "Retractable glass walls",
        "Climate-controlled comfort",
        "Custom floral arrangements",
        "Outdoor kitchen access",
        "Private garden access"
      ],
      pricing: {
        weekday: "$165 per person",
        weekend: "$185 per person",
        minimum: "6 guests required"
      },
      duration: "2-3 hours",
      availability: "Daily, 6:00 PM - 10:00 PM",
      specialties: ["Seasonal menus", "Garden-to-table ingredients", "Celebration packages"]
    },
    {
      id: 4,
      name: "Executive Boardroom",
      subtitle: "Business & Pleasure",
      capacity: "8-16 guests",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      description: "Combine business with exceptional dining in our sophisticated boardroom, perfect for corporate events, client entertainment, and executive meetings.",
      features: [
        "State-of-the-art AV equipment",
        "High-speed internet access",
        "Professional presentation setup",
        "Executive lunch menus",
        "Dedicated service team",
        "Flexible seating arrangements"
      ],
      pricing: {
        weekday: "$145 per person",
        weekend: "$165 per person",
        minimum: "8 guests required"
      },
      duration: "1.5-3 hours",
      availability: "Monday - Friday, 12:00 PM - 8:00 PM",
      specialties: ["Business lunch packages", "Corporate catering", "Meeting facilitation"]
    }
  ];

  const currentVenue = privateDiningVenues?.[selectedVenue];

  const specialOccasions = [
    {
      name: "Anniversary Celebrations",
      description: "Romantic multi-course dinners with personalized touches",
      icon: "Heart",
      features: ["Custom menu creation", "Floral arrangements", "Champagne service", "Memory book"]
    },
    {
      name: "Birthday Parties",
      description: "Memorable celebrations tailored to your preferences",
      icon: "Gift",
      features: ["Birthday cake service", "Special decorations", "Group activities", "Photo opportunities"]
    },
    {
      name: "Corporate Events",
      description: "Professional dining experiences for business occasions",
      icon: "Briefcase",
      features: ["Team building activities", "Presentation facilities", "Networking spaces", "Executive service"]
    },
    {
      name: "Holiday Gatherings",
      description: "Festive celebrations with seasonal specialties",
      icon: "Star",
      features: ["Holiday menus", "Seasonal decorations", "Traditional dishes", "Family-style service"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Users" size={32} className="text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-foreground">Private Dining Experiences</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create unforgettable memories in our exclusive private dining venues, each designed to provide 
            intimate settings for your most special occasions.
          </p>
        </div>

        {/* Venue Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {privateDiningVenues?.map((venue, index) => (
            <Button
              key={venue?.id}
              variant={selectedVenue === index ? "default" : "outline"}
              onClick={() => setSelectedVenue(index)}
              className="min-w-[200px] text-center"
            >
              <div>
                <div className="font-semibold">{venue?.name}</div>
                <div className="text-xs opacity-80">{venue?.capacity}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Venue Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={currentVenue?.image}
                alt={currentVenue?.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {currentVenue?.capacity}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {currentVenue?.gallery?.slice(1)?.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${currentVenue?.name} view ${index + 2}`}
                    className="w-full h-24 object-cover cursor-pointer hover:scale-105 elegant-transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Venue Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                {currentVenue?.name}
              </h3>
              <p className="text-xl text-secondary font-medium mb-4">
                {currentVenue?.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentVenue?.description}
              </p>
            </div>

            {/* Venue Details Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Capacity</p>
                    <p className="text-sm text-muted-foreground">{currentVenue?.capacity}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Duration</p>
                    <p className="text-sm text-muted-foreground">{currentVenue?.duration}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Availability</p>
                    <p className="text-sm text-muted-foreground">{currentVenue?.availability}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="DollarSign" size={20} className="text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Starting From</p>
                    <p className="text-sm text-muted-foreground">{currentVenue?.pricing?.weekday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Star" size={20} className="text-secondary mr-2" />
                Exclusive Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentVenue?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Award" size={20} className="text-secondary mr-2" />
                Signature Specialties
              </h4>
              <div className="space-y-2">
                {currentVenue?.specialties?.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Sparkles" size={14} className="text-secondary" />
                    <span className="text-sm text-muted-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="luxury-card p-6">
              <h4 className="font-heading font-semibold text-foreground mb-4">Pricing Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Weekday (Mon-Thu)</span>
                  <span className="font-semibold text-secondary">{currentVenue?.pricing?.weekday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Weekend (Fri-Sun)</span>
                  <span className="font-semibold text-secondary">{currentVenue?.pricing?.weekend}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">{currentVenue?.pricing?.minimum}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                size="lg"
                onClick={() => setShowBookingForm(true)}
              >
                Reserve This Venue
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" iconName="Phone" iconPosition="left">
                  Call for Details
                </Button>
                <Button variant="outline" iconName="Mail" iconPosition="left">
                  Email Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Special Occasions */}
        <div className="luxury-card p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Special Occasion Packages</h3>
            <p className="text-muted-foreground">
              Let us help you create the perfect celebration with our curated packages for life's most important moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOccasions?.map((occasion, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg border border-border">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={occasion?.icon} size={24} className="text-secondary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{occasion?.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{occasion?.description}</p>
                <div className="space-y-1">
                  {occasion?.features?.map((feature, idx) => (
                    <div key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-success mr-1" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card rounded-2xl shadow-luxury max-w-md w-full">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-semibold text-foreground">Reserve {currentVenue?.name}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowBookingForm(false)}
                    iconName="X"
                  />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                    <option>2 guests</option>
                    <option>4 guests</option>
                    <option>6 guests</option>
                    <option>8 guests</option>
                    <option>10+ guests</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Dietary restrictions, celebration details, special arrangements..."
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                  />
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button variant="default" fullWidth iconName="Calendar" iconPosition="left">
                    Submit Reservation Request
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => setShowBookingForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to Create Your Perfect Evening?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our private dining team is here to help you plan every detail of your special occasion. 
            Contact us to discuss your vision and let us bring it to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" iconName="Phone" iconPosition="left" size="lg">
              Call: (555) 123-4567
            </Button>
            <Button variant="outline" iconName="Mail" iconPosition="left" size="lg">
              Email: private@luxehaven.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;