import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceBuilder = () => {
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [packageDetails, setPackageDetails] = useState({
    duration: '2-days',
    guests: 2,
    preferences: []
  });

  const availableExperiences = [
    {
      id: 'museum-tour',
      name: 'Private Museum Tour',
      category: 'Cultural',
      duration: '3 hours',
      price: 150,
      icon: 'Palette',
      description: 'Exclusive after-hours access with expert curator',
      availability: 'Daily except Monday'
    },
    {
      id: 'chef-table',
      name: 'Chef\'s Table Experience',
      category: 'Culinary',
      duration: '3 hours',
      price: 280,
      icon: 'ChefHat',
      description: 'Intimate dining with wine pairings',
      availability: 'Evening only'
    },
    {
      id: 'sunrise-yoga',
      name: 'Sunrise Yoga',
      category: 'Wellness',
      duration: '1 hour',
      price: 75,
      icon: 'Heart',
      description: 'Rooftop yoga session at dawn',
      availability: 'Daily 6:00 AM'
    },
    {
      id: 'wine-tasting',
      name: 'Wine Cellar Tour',
      category: 'Culinary',
      duration: '1.5 hours',
      price: 125,
      icon: 'Wine',
      description: 'Private tastings in temperature-controlled cellar',
      availability: 'Afternoon & Evening'
    },
    {
      id: 'spa-ritual',
      name: 'Signature Spa Ritual',
      category: 'Wellness',
      duration: '2 hours',
      price: 220,
      icon: 'Sparkles',
      description: 'Customized treatments with local ingredients',
      availability: 'Daily 9 AM - 7 PM'
    },
    {
      id: 'art-studio',
      name: 'Artist Studio Visit',
      category: 'Cultural',
      duration: '2 hours',
      price: 120,
      icon: 'Brush',
      description: 'Meet local artists in their creative spaces',
      availability: 'Weekends only'
    }
  ];

  const toggleExperience = (experienceId) => {
    setSelectedExperiences(prev => 
      prev?.includes(experienceId)
        ? prev?.filter(id => id !== experienceId)
        : [...prev, experienceId]
    );
  };

  const calculateTotal = () => {
    return selectedExperiences?.reduce((total, id) => {
      const experience = availableExperiences?.find(exp => exp?.id === id);
      return total + (experience ? experience?.price * packageDetails?.guests : 0);
    }, 0);
  };

  const getSelectedExperienceDetails = () => {
    return selectedExperiences?.map(id => 
      availableExperiences?.find(exp => exp?.id === id)
    )?.filter(Boolean);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Build Your Perfect Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create a personalized journey by selecting from our curated experiences. Our concierge will coordinate every detail.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience Selection */}
            <div className="lg:col-span-2">
              <div className="luxury-card p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Select Your Experiences
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableExperiences?.map((experience) => (
                    <motion.div
                      key={experience?.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`border-2 rounded-lg p-4 cursor-pointer elegant-transition ${
                        selectedExperiences?.includes(experience?.id)
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                      onClick={() => toggleExperience(experience?.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedExperiences?.includes(experience?.id)
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon name={experience?.icon} size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {experience?.name}
                            </h4>
                            <span className="text-sm text-secondary font-medium">
                              {experience?.category}
                            </span>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedExperiences?.includes(experience?.id)
                            ? 'border-primary bg-primary' :'border-muted-foreground/30'
                        }`}>
                          {selectedExperiences?.includes(experience?.id) && (
                            <Icon name="Check" size={14} className="text-primary-foreground" />
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {experience?.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Icon name="Clock" size={14} className="text-muted-foreground" />
                            <span>{experience?.duration}</span>
                          </span>
                          <span className="text-primary font-semibold">
                            ${experience?.price}
                          </span>
                        </div>
                        <span className="text-success text-xs">
                          {experience?.availability}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Summary */}
            <div className="lg:col-span-1">
              <div className="luxury-card p-8 sticky top-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Your Experience Package
                </h3>

                {/* Package Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Duration
                    </label>
                    <select
                      value={packageDetails?.duration}
                      onChange={(e) => setPackageDetails(prev => ({ ...prev, duration: e?.target?.value }))}
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value="1-day">1 Day</option>
                      <option value="2-days">2 Days</option>
                      <option value="3-days">3 Days</option>
                      <option value="week">1 Week</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={packageDetails?.guests}
                      onChange={(e) => setPackageDetails(prev => ({ ...prev, guests: parseInt(e?.target?.value) }))}
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Selected Experiences */}
                {selectedExperiences?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Selected Experiences</h4>
                    <div className="space-y-2">
                      {getSelectedExperienceDetails()?.map((experience) => (
                        <div key={experience?.id} className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{experience?.name}</span>
                          <span className="text-primary font-medium">
                            ${experience?.price * packageDetails?.guests}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ${calculateTotal()?.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    For {packageDetails?.guests} guest{packageDetails?.guests > 1 ? 's' : ''}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    disabled={selectedExperiences?.length === 0}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Book Experience Package
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Consult with Concierge
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Need Help?</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Our concierge team is available 24/7 to help customize your perfect experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBuilder;