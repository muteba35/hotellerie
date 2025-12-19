import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FarmToTable = () => {
  const [activeProducer, setActiveProducer] = useState(0);

  const localProducers = [
    {
      id: 1,
      name: "Heritage Valley Farm",
      specialty: "Organic Vegetables & Herbs",
      distance: "3 miles",
      established: "1952",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
      ownerImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      owner: "Sarah & Michael Thompson",
      story: `Three generations of the Thompson family have cultivated this fertile valley, transforming it into a showcase of sustainable agriculture.\n\nOur partnership began five years ago when Chef Marcus discovered their heirloom tomatoes at the local farmers market. Today, they grow exclusive varieties specifically for our kitchen.\n\nTheir commitment to organic practices and soil health ensures that every ingredient carries the pure essence of our local terroir.`,
      products: [
        { name: "Heirloom Tomatoes", season: "Summer", availability: "June - September" },
        { name: "Fresh Herbs", season: "Year-round", availability: "Daily harvest" },
        { name: "Seasonal Greens", season: "Spring/Fall", availability: "March - May, Sept - Nov" },
        { name: "Root Vegetables", season: "Fall/Winter", availability: "October - February" }
      ],
      certifications: ["USDA Organic", "Certified Naturally Grown", "Sustainable Agriculture"],
      practices: ["Crop Rotation", "Composting", "Integrated Pest Management", "Water Conservation"]
    },
    {
      id: 2,
      name: "Coastal Fishery Co-op",
      specialty: "Fresh Seafood & Shellfish",
      distance: "8 miles",
      established: "1978",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      ownerImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      owner: "Captain James Rodriguez",
      story: `Captain Rodriguez leads a cooperative of twelve local fishing families who have worked these waters for generations.\n\nTheir sustainable fishing practices ensure the health of our marine ecosystem while providing us with the freshest catch daily.\n\nEvery morning at 5 AM, our chef receives the day's selection, often still glistening with sea spray from the pre-dawn harvest.`,
      products: [
        { name: "Day Boat Scallops", season: "Year-round", availability: "Daily (weather permitting)" },
        { name: "Line-Caught Halibut", season: "Spring/Summer", availability: "March - August" },
        { name: "Local Oysters", season: "Fall/Winter", availability: "September - April" },
        { name: "Seasonal Fish", season: "Variable", availability: "Based on sustainable quotas" }
      ],
      certifications: ["Marine Stewardship Council", "Ocean Wise", "Sustainable Fisheries"],
      practices: ["Selective Fishing", "Quota Management", "Habitat Protection", "Traceability"]
    },
    {
      id: 3,
      name: "Mountain View Dairy",
      specialty: "Artisan Cheeses & Dairy",
      distance: "12 miles",
      established: "1965",
      image: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800",
      ownerImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      owner: "Elena Marchetti",
      story: `Elena brought traditional Italian cheesemaking techniques to our mountain valleys, creating award-winning artisan cheeses.\n\nHer small herd of heritage breed cows graze on alpine meadows, producing milk with exceptional richness and complexity.\n\nEach cheese is hand-crafted using time-honored methods, aged in natural caves that provide the perfect environment for flavor development.`,
      products: [
        { name: "Alpine Aged Cheddar", season: "Year-round", availability: "12-month aging cycle" },
        { name: "Fresh Mozzarella", season: "Year-round", availability: "Made daily" },
        { name: "Seasonal Soft Cheeses", season: "Spring/Summer", availability: "April - September" },
        { name: "Grass-Fed Butter", season: "Year-round", availability: "Weekly batches" }
      ],
      certifications: ["Artisan Cheese Guild", "Grass-Fed Certified", "Animal Welfare Approved"],
      practices: ["Rotational Grazing", "Natural Aging", "Traditional Methods", "Heritage Breeds"]
    }
  ];

  const seasonalCalendar = [
    {
      season: "Spring",
      months: "March - May",
      highlights: ["Fresh Asparagus", "Spring Greens", "Early Herbs", "Young Cheeses"],
      color: "bg-green-100 text-green-800"
    },
    {
      season: "Summer", 
      months: "June - August",
      highlights: ["Heirloom Tomatoes", "Fresh Seafood", "Stone Fruits", "Peak Herbs"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      season: "Fall",
      months: "September - November", 
      highlights: ["Root Vegetables", "Aged Cheeses", "Harvest Grains", "Wild Mushrooms"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      season: "Winter",
      months: "December - February",
      highlights: ["Preserved Goods", "Citrus Fruits", "Hearty Vegetables", "Cured Meats"],
      color: "bg-blue-100 text-blue-800"
    }
  ];

  const currentProducer = localProducers?.[activeProducer];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Leaf" size={32} className="text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-foreground">Farm to Table</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate local producers who supply our kitchen with the finest ingredients, 
            creating a direct connection between our land and your plate.
          </p>
        </div>

        {/* Producer Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {localProducers?.map((producer, index) => (
            <Button
              key={producer?.id}
              variant={activeProducer === index ? "default" : "outline"}
              onClick={() => setActiveProducer(index)}
              className="min-w-[180px] text-center"
            >
              <div>
                <div className="font-semibold">{producer?.name}</div>
                <div className="text-xs opacity-80">{producer?.specialty}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Producer Profile */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Producer Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={currentProducer?.image}
                alt={`${currentProducer?.name} farm`}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-foreground">{currentProducer?.distance} away</span>
                </div>
              </div>
            </div>

            <div className="luxury-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={currentProducer?.ownerImage}
                    alt={currentProducer?.owner}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{currentProducer?.owner}</h4>
                  <p className="text-sm text-muted-foreground">Owner & Producer</p>
                  <p className="text-xs text-secondary">Est. {currentProducer?.established}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Certifications</h5>
                  <div className="space-y-1">
                    {currentProducer?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Award" size={12} className="text-secondary" />
                        <span className="text-xs text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-foreground mb-2">Practices</h5>
                  <div className="space-y-1">
                    {currentProducer?.practices?.map((practice, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} className="text-success" />
                        <span className="text-xs text-muted-foreground">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Producer Story & Products */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                {currentProducer?.name}
              </h3>
              <p className="text-xl text-secondary font-medium mb-4">
                {currentProducer?.specialty}
              </p>
              
              <div className="prose prose-lg max-w-none mb-6">
                {currentProducer?.story?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Package" size={20} className="text-secondary mr-2" />
                Featured Products
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProducer?.products?.map((product, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg border border-border">
                    <h5 className="font-medium text-foreground mb-2">{product?.name}</h5>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} className="text-secondary" />
                        <span className="text-sm text-muted-foreground">{product?.season}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} className="text-secondary" />
                        <span className="text-sm text-muted-foreground">{product?.availability}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" iconName="MapPin" iconPosition="left">
                Visit Farm
              </Button>
              <Button variant="outline" iconName="Phone" iconPosition="left">
                Contact Producer
              </Button>
            </div>
          </div>
        </div>

        {/* Seasonal Calendar */}
        <div className="luxury-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Seasonal Ingredient Calendar</h3>
            <p className="text-muted-foreground">
              Our menu evolves with nature's rhythm, showcasing the best ingredients each season has to offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCalendar?.map((season, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${season?.color} mb-4`}>
                  <Icon 
                    name={season?.season === 'Spring' ? 'Flower' : 
                          season?.season === 'Summer' ? 'Sun' :
                          season?.season === 'Fall' ? 'Leaf' : 'Snowflake'} 
                    size={24} 
                  />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{season?.season}</h4>
                <p className="text-sm text-secondary font-medium mb-4">{season?.months}</p>
                <div className="space-y-2">
                  {season?.highlights?.map((highlight, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Experience Our Farm-to-Table Philosophy
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us for a culinary journey that celebrates the connection between local producers 
            and exceptional cuisine. Every dish tells the story of our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" iconName="Calendar" iconPosition="left" size="lg">
              Book Farm Tour & Dinner
            </Button>
            <Button variant="outline" iconName="Download" iconPosition="left" size="lg">
              Download Seasonal Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmToTable;