import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LocalPartnerships = () => {
  const partnerships = [
    {
      id: 1,
      name: 'Metropolitan Museum of Fine Arts',
      type: 'Cultural Institution',
      description: 'Exclusive after-hours access to special exhibitions and private curator-led tours',
      image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: [
        'Private exhibition viewings',
        'Meet-the-artist sessions',
        'Exclusive collection previews',
        'VIP opening night invitations'
      ],
      icon: 'Palette',
      established: '2019'
    },
    {
      id: 2,
      name: 'Artisan Quarter Studios',
      type: 'Artist Collective',
      description: 'Direct access to working studios of renowned local artists and craftspeople',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: [
        'Studio visits and demonstrations',
        'Hands-on workshops',
        'Commission opportunities',
        'Artist mentorship programs'
      ],
      icon: 'Brush',
      established: '2020'
    },
    {
      id: 3,
      name: 'Heritage Culinary Institute',
      type: 'Culinary School',
      description: 'Collaborative cooking experiences with master chefs and culinary students',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: [
        'Master chef collaborations',
        'Traditional technique workshops',
        'Farm-to-table experiences',
        'Wine and food pairing classes'
      ],
      icon: 'ChefHat',
      established: '2018'
    },
    {
      id: 4,
      name: 'Botanical Wellness Center',
      type: 'Wellness Sanctuary',
      description: 'Holistic wellness programs combining traditional and modern therapeutic practices',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: [
        'Personalized wellness consultations',
        'Traditional healing practices',
        'Meditation and mindfulness training',
        'Therapeutic garden experiences'
      ],
      icon: 'Leaf',
      established: '2021'
    },
    {
      id: 5,
      name: 'Historic Architecture Society',
      type: 'Cultural Heritage',
      description: 'Guided explorations of architectural treasures and hidden historical sites',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: [
        'Private building tours',
        'Architectural history lectures',
        'Restoration project visits',
        'Heritage preservation workshops'
      ],
      icon: 'Building',
      established: '2017'
    },
    {
      id: 6,
      name: 'Sustainable Urban Farm',
      type: 'Agricultural Partner',
      description: 'Farm-to-table experiences showcasing sustainable agriculture and local produce',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      benefits: [
        'Harvest participation',
        'Sustainable farming education',
        'Seasonal cooking classes',
        'Organic produce sourcing'
      ],
      icon: 'Sprout',
      established: '2022'
    }
  ];

  const stats = [
    { number: '25+', label: 'Local Partners', icon: 'Users' },
    { number: '150+', label: 'Exclusive Experiences', icon: 'Star' },
    { number: '98%', label: 'Guest Satisfaction', icon: 'Heart' },
    { number: '5 Years', label: 'Average Partnership', icon: 'Clock' }
  ];

  return (
    <section className="py-20 bg-card">
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
            Exclusive Local Partnerships
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our carefully curated network of local partners provides you with authentic, exclusive access to the cultural heart of our destination
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary-foreground" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships?.map((partner, index) => (
            <motion.div
              key={partner?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="luxury-card overflow-hidden group luxury-hover"
            >
              {/* Partner Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={partner?.image}
                  alt={partner?.name}
                  className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon name={partner?.icon} size={20} className="text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Since {partner?.established}
                  </span>
                </div>
              </div>

              {/* Partner Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {partner?.name}
                  </h3>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {partner?.type}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {partner?.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Exclusive Benefits:
                  </h4>
                  {partner?.benefits?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground py-3 rounded-lg font-medium elegant-transition">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 luxury-card p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                Why Our Partnerships Matter
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Key" size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Exclusive Access</h4>
                    <p className="text-muted-foreground">
                      Gain entry to experiences and locations typically closed to the public, creating truly unique memories.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Users" size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Authentic Connections</h4>
                    <p className="text-muted-foreground">
                      Meet local experts, artists, and cultural leaders who share their passion and knowledge with you personally.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Sparkles" size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Curated Excellence</h4>
                    <p className="text-muted-foreground">
                      Every partnership is carefully selected to ensure the highest quality and most meaningful experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Local partnership collaboration"
                className="w-full h-96 object-cover rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Ready to Explore?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our concierge team help you discover the perfect combination of partner experiences for your stay
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium elegant-transition">
              Contact Concierge
            </button>
            <button className="text-primary hover:text-primary/80 font-medium elegant-transition">
              View All Partnerships →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalPartnerships;