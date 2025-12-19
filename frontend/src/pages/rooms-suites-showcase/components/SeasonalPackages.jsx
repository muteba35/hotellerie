import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalPackages = () => {
  const packages = [
    {
      id: 'winter-wellness',
      title: 'Winter Wellness Retreat',
      subtitle: 'Rejuvenate in luxury',
      description: `Escape the winter chill with our comprehensive wellness package featuring daily spa treatments, meditation sessions, and gourmet healthy cuisine.\n\nIncludes access to our heated infinity pool, private yoga sessions, and complimentary wellness consultations.`,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      price: 450,
      originalPrice: 650,
      duration: '3 nights minimum',
      validUntil: 'March 31, 2025',
      features: [
        'Daily 60-minute spa treatment',
        'Private yoga sessions',
        'Healthy gourmet meals',
        'Wellness consultation',
        'Heated pool access'
      ],
      badge: 'Limited Time',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'spring-cultural',
      title: 'Spring Cultural Festival',
      subtitle: 'Immerse in local heritage',
      description: `Experience the vibrant spring cultural season with exclusive access to local festivals, private gallery tours, and cultural workshops.\n\nConnect with local artists, enjoy traditional performances, and discover the rich heritage of our destination.`,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      price: 380,
      originalPrice: 520,
      duration: '2 nights minimum',
      validUntil: 'May 15, 2025',
      features: [
        'Private gallery tours',
        'Cultural workshops',
        'Festival access passes',
        'Local artist meetings',
        'Traditional performances'
      ],
      badge: 'Exclusive Access',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'romance-package',
      title: 'Romantic Escape',
      subtitle: 'Create unforgettable memories',
      description: `Celebrate love with our romantic package featuring champagne welcome, couples spa treatments, and private dining experiences.\n\nPerfect for anniversaries, proposals, or simply reconnecting with your special someone.`,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      price: 520,
      originalPrice: 720,
      duration: '2 nights minimum',
      validUntil: 'Ongoing',
      features: [
        'Champagne welcome',
        'Couples spa treatment',
        'Private dining experience',
        'Rose petal turndown',
        'Late checkout'
      ],
      badge: 'Most Popular',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Seasonal Packages
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Curated experiences that celebrate the season and create lasting memories
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages?.map((pkg) => (
          <div key={pkg?.id} className="luxury-card overflow-hidden group luxury-hover">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={pkg?.image}
                alt={pkg?.title}
                className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${pkg?.color} opacity-20`} />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  {pkg?.badge}
                </span>
              </div>
              
              {/* Price */}
              <div className="absolute top-4 right-4 text-right">
                <div className="text-2xl font-heading font-bold text-white drop-shadow-lg">
                  ${pkg?.price}
                </div>
                <div className="text-sm text-white/80 line-through">
                  ${pkg?.originalPrice}
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                  {pkg?.title}
                </h3>
                <p className="text-secondary font-medium text-sm mb-2">
                  {pkg?.subtitle}
                </p>
                <p className="text-muted-foreground text-sm whitespace-pre-line">
                  {pkg?.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Package Includes:</h4>
                <ul className="space-y-2">
                  {pkg?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Package Details */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{pkg?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>Valid until {pkg?.validUntil}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Package
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Info"
                  iconPosition="left"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
          <Icon name="Sparkles" size={20} className="text-secondary" />
          <span>Can't find the perfect package?</span>
        </div>
        
        <Button
          variant="outline"
          size="lg"
          iconName="MessageCircle"
          iconPosition="left"
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Create Custom Package
        </Button>
      </div>
    </div>
  );
};

export default SeasonalPackages;