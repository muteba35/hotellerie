import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExperienceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('cultural');

  const categories = [
    {
      id: 'cultural',
      name: 'Cultural Immersion',
      icon: 'Palette',
      description: 'Exclusive partnerships with local museums, galleries, and cultural institutions',
      color: 'from-purple-600 to-pink-600',
      experiences: [
        {
          id: 1,
          title: 'Private Museum Tours',
          description: 'After-hours access to renowned local museums with expert curators',
          image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '3 hours',
          price: '$150',
          availability: 'Available today'
        },
        {
          id: 2,
          title: 'Artist Studio Visits',
          description: 'Meet local artists in their studios and witness the creative process',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '2 hours',
          price: '$120',
          availability: 'Available tomorrow'
        },
        {
          id: 3,
          title: 'Heritage Walking Tours',
          description: 'Discover hidden stories of the city with local historians',
          image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '2.5 hours',
          price: '$85',
          availability: 'Available today'
        }
      ]
    },
    {
      id: 'culinary',
      name: 'Culinary Journey',
      icon: 'ChefHat',
      description: 'Chef collaborations, wine tastings, and exclusive dining experiences',
      color: 'from-orange-600 to-red-600',
      experiences: [
        {
          id: 4,
          title: 'Chef\'s Table Experience',
          description: 'Intimate dining with our executive chef and wine pairings',
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '3 hours',
          price: '$280',
          availability: 'Available tonight'
        },
        {
          id: 5,
          title: 'Market to Table',
          description: 'Join our chef at local markets and cook together',
          image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '4 hours',
          price: '$195',
          availability: 'Available tomorrow'
        },
        {
          id: 6,
          title: 'Wine Cellar Tours',
          description: 'Private tastings in our temperature-controlled wine cellar',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '1.5 hours',
          price: '$125',
          availability: 'Available today'
        }
      ]
    },
    {
      id: 'wellness',
      name: 'Wellness Sanctuary',
      icon: 'Heart',
      description: 'Spa treatments, fitness programs, and mindfulness experiences',
      color: 'from-green-600 to-teal-600',
      experiences: [
        {
          id: 7,
          title: 'Sunrise Yoga Sessions',
          description: 'Private yoga sessions on our rooftop terrace at dawn',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '1 hour',
          price: '$75',
          availability: 'Available tomorrow'
        },
        {
          id: 8,
          title: 'Signature Spa Rituals',
          description: 'Customized treatments using locally sourced ingredients',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '2 hours',
          price: '$220',
          availability: 'Available today'
        },
        {
          id: 9,
          title: 'Meditation Gardens',
          description: 'Guided meditation in our private botanical gardens',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '45 minutes',
          price: '$60',
          availability: 'Available today'
        }
      ]
    },
    {
      id: 'seasonal',
      name: 'Seasonal Celebrations',
      icon: 'Calendar',
      description: 'Property events, local festivals, and seasonal experiences',
      color: 'from-blue-600 to-indigo-600',
      experiences: [
        {
          id: 10,
          title: 'Holiday Gala Evenings',
          description: 'Exclusive seasonal celebrations with live entertainment',
          image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '4 hours',
          price: '$350',
          availability: 'Dec 24-31'
        },
        {
          id: 11,
          title: 'Summer Solstice Soirée',
          description: 'Rooftop celebration with cocktails and city views',
          image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '3 hours',
          price: '$180',
          availability: 'June 21'
        },
        {
          id: 12,
          title: 'Autumn Harvest Festival',
          description: 'Farm-to-table dining with local harvest celebrations',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          duration: '5 hours',
          price: '$245',
          availability: 'Oct 15-31'
        }
      ]
    }
  ];

  const activeExperiences = categories?.find(cat => cat?.id === activeCategory)?.experiences || [];

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
            Curated Experience Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each experience is thoughtfully crafted to create lasting memories and authentic connections with our destination
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category, index) => (
            <motion.button
              key={category?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full elegant-transition ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-card-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span className="font-medium">{category?.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {categories?.find(cat => cat?.id === activeCategory)?.description}
          </p>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeExperiences?.map((experience, index) => (
            <motion.div
              key={experience?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="luxury-card overflow-hidden group cursor-pointer luxury-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={experience?.image}
                  alt={experience?.title}
                  className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {experience?.price}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {experience?.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {experience?.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience?.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-success" />
                    <span className="text-sm text-success font-medium">
                      {experience?.availability}
                    </span>
                  </div>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm elegant-transition">
                    Book Now →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceCategories;