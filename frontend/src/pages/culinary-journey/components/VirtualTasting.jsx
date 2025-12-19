import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VirtualTasting = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tastingExperiences = [
    {
      id: 1,
      title: "Signature Tasting Menu",
      subtitle: "7-Course Culinary Journey",
      description: "Experience our chef\'s artistry through a carefully orchestrated seven-course tasting menu that tells the story of our region\'s finest ingredients.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2.5 hours",
      price: "$125 per person",
      courses: [
        {
          name: "Amuse-Bouche",
          description: "Oyster foam with caviar pearls",
          technique: "Molecular gastronomy spherification"
        },
        {
          name: "First Course",
          description: "Seared scallops with cauliflower purée",
          technique: "Pan-searing with butter basting"
        },
        {
          name: "Second Course", 
          description: "Truffle risotto with aged parmesan",
          technique: "Traditional mantecatura method"
        },
        {
          name: "Fish Course",
          description: "Halibut with lemon butter sauce",
          technique: "En papillote cooking method"
        },
        {
          name: "Meat Course",
          description: "Herb-crusted lamb with red wine jus",
          technique: "Reverse searing technique"
        },
        {
          name: "Cheese Course",
          description: "Local artisan cheese selection",
          technique: "Traditional aging process"
        },
        {
          name: "Dessert",
          description: "Dark chocolate soufflé",
          technique: "Classic French soufflé method"
        }
      ],
      flavorProfile: {
        umami: 85,
        sweet: 60,
        salty: 70,
        sour: 45,
        bitter: 30
      },
      videoUrl: "virtual-tasting-signature.mp4"
    },
    {
      id: 2,
      title: "Wine & Dine Experience",
      subtitle: "Perfect Pairings Exploration",
      description: "Discover the art of wine pairing with our sommelier-selected wines matched to complement each course\'s unique flavor profile.",
      image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3 hours",
      price: "$175 per person",
      courses: [
        {
          name: "Champagne Reception",
          description: "Dom Pérignon with oyster canapés",
          technique: "Traditional méthode champenoise"
        },
        {
          name: "White Wine Course",
          description: "Chablis with seared scallops",
          technique: "Mineral-driven terroir expression"
        },
        {
          name: "Rosé Course",
          description: "Provence rosé with salmon tartare",
          technique: "Saignée method production"
        },
        {
          name: "Light Red Course",
          description: "Pinot Noir with duck breast",
          technique: "Burgundian winemaking style"
        },
        {
          name: "Full Red Course",
          description: "Bordeaux blend with beef tenderloin",
          technique: "Traditional barrel aging"
        },
        {
          name: "Dessert Wine",
          description: "Sauternes with foie gras",
          technique: "Noble rot concentration"
        }
      ],
      flavorProfile: {
        umami: 75,
        sweet: 80,
        salty: 60,
        sour: 70,
        bitter: 40
      },
      videoUrl: "virtual-tasting-wine.mp4"
    },
    {
      id: 3,
      title: "Chef\'s Table Experience",
      subtitle: "Behind-the-Scenes Culinary Theater",
      description: "Join Chef Marcus at the exclusive chef\'s table for an intimate dining experience where you can witness culinary artistry up close.",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4 hours",
      price: "$250 per person",
      courses: [
        {
          name: "Kitchen Tour",
          description: "Exclusive behind-the-scenes access",
          technique: "Professional kitchen operations"
        },
        {
          name: "Ingredient Selection",
          description: "Choose your menu components",
          technique: "Interactive culinary experience"
        },
        {
          name: "Cooking Demonstration",
          description: "Watch Chef Marcus create your meal",
          technique: "Live culinary performance"
        },
        {
          name: "Personalized Menu",
          description: "Custom 5-course meal creation",
          technique: "Bespoke culinary artistry"
        },
        {
          name: "Wine Education",
          description: "Sommelier-guided tasting",
          technique: "Professional wine service"
        },
        {
          name: "Recipe Cards",
          description: "Take home cooking instructions",
          technique: "Culinary knowledge transfer"
        }
      ],
      flavorProfile: {
        umami: 90,
        sweet: 70,
        salty: 80,
        sour: 50,
        bitter: 35
      },
      videoUrl: "virtual-tasting-chefs-table.mp4"
    }
  ];

  const currentExperience = tastingExperiences?.[activeExperience];

  const handlePlayVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Play" size={32} className="text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-foreground">Virtual Tasting Experiences</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in our culinary world through interactive virtual experiences 
            that showcase our signature dishes, preparation techniques, and flavor profiles.
          </p>
        </div>

        {/* Experience Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tastingExperiences?.map((experience, index) => (
            <Button
              key={experience?.id}
              variant={activeExperience === index ? "default" : "outline"}
              onClick={() => setActiveExperience(index)}
              className="min-w-[200px] text-center"
            >
              <div>
                <div className="font-semibold">{experience?.title}</div>
                <div className="text-xs opacity-80">{experience?.subtitle}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Main Experience Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video/Image Section */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={currentExperience?.image}
                alt={currentExperience?.title}
                className="w-full h-[400px] object-cover"
              />
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handlePlayVideo}
                  iconName={isPlaying ? "Pause" : "Play"}
                  className="bg-background/90 text-foreground hover:bg-background shadow-luxury"
                >
                  {isPlaying ? "Pause Experience" : "Start Virtual Tasting"}
                </Button>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {currentExperience?.duration}
              </div>
            </div>

            {/* Flavor Profile Visualization */}
            <div className="luxury-card p-6">
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Icon name="BarChart3" size={20} className="text-secondary mr-2" />
                Flavor Profile Analysis
              </h4>
              <div className="space-y-3">
                {Object.entries(currentExperience?.flavorProfile)?.map(([flavor, intensity]) => (
                  <div key={flavor} className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-foreground capitalize w-16">
                      {flavor}
                    </span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${intensity}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{intensity}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                {currentExperience?.title}
              </h3>
              <p className="text-xl text-secondary font-medium mb-4">
                {currentExperience?.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentExperience?.description}
              </p>
              
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <span className="font-medium text-foreground">{currentExperience?.duration}</span>
                </div>
                <div className="text-2xl font-heading font-bold text-secondary">
                  {currentExperience?.price}
                </div>
              </div>
            </div>

            {/* Course Breakdown */}
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                <Icon name="List" size={20} className="text-secondary mr-2" />
                Experience Breakdown
              </h4>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {currentExperience?.courses?.map((course, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-medium text-foreground">{course?.name}</h5>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{course?.description}</p>
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={14} className="text-accent" />
                      <span className="text-xs text-accent font-medium">{course?.technique}</span>
                    </div>
                  </div>
                ))}
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
              >
                Book This Experience
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  iconName="Gift"
                  iconPosition="left"
                >
                  Gift Experience
                </Button>
                <Button
                  variant="outline"
                  iconName="Share"
                  iconPosition="left"
                >
                  Share Experience
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="luxury-card p-6 text-center">
            <Icon name="Users" size={32} className="text-secondary mx-auto mb-4" />
            <h4 className="font-heading font-semibold text-foreground mb-2">Group Experiences</h4>
            <p className="text-sm text-muted-foreground">
              Perfect for special occasions, corporate events, and intimate celebrations
            </p>
          </div>
          
          <div className="luxury-card p-6 text-center">
            <Icon name="Award" size={32} className="text-secondary mx-auto mb-4" />
            <h4 className="font-heading font-semibold text-foreground mb-2">Expert Guidance</h4>
            <p className="text-sm text-muted-foreground">
              Led by our award-winning chef and certified sommelier team
            </p>
          </div>
          
          <div className="luxury-card p-6 text-center">
            <Icon name="Camera" size={32} className="text-secondary mx-auto mb-4" />
            <h4 className="font-heading font-semibold text-foreground mb-2">Memorable Moments</h4>
            <p className="text-sm text-muted-foreground">
              Professional photography included to capture your culinary journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTasting;