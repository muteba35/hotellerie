import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GuestStoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const guestStories = [
    {
      id: 1,
      guest: {
        name: "Sarah Chen",
        location: "San Francisco, CA",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        stayDate: "November 2024"
      },
      experience: "Cultural Immersion",
      story: `The private museum tour was absolutely magical. Having the entire gallery to ourselves after hours, with the curator sharing stories that aren't in any guidebook - it felt like we were part of something truly exclusive. The way Luxe Haven arranged this experience showed their deep connections with the local cultural scene.`,
      images: [
        "https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 5,
      highlight: "Exclusive after-hours museum access"
    },
    {
      id: 2,
      guest: {
        name: "Marcus Rodriguez",
        location: "Miami, FL",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        stayDate: "October 2024"
      },
      experience: "Culinary Journey",
      story: `The chef's table experience exceeded every expectation. Watching the culinary team create each course while explaining their techniques and ingredient sourcing was like attending a masterclass. The wine pairings were perfect, and the intimate setting made it feel like we were dining with friends rather than at a hotel.`,
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 5,
      highlight: "Intimate chef\'s table dining"
    },
    {
      id: 3,
      guest: {
        name: "Emma Thompson",
        location: "London, UK",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        stayDate: "September 2024"
      },
      experience: "Wellness Sanctuary",
      story: `The sunrise yoga session on the rooftop was transformative. As the city awakened below us, I felt completely at peace. The instructor was incredibly knowledgeable, and the setting was breathtaking. It's rare to find such tranquility in the heart of the city. This experience alone made our stay unforgettable.`,
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 5,
      highlight: "Rooftop sunrise yoga sessions"
    },
    {
      id: 4,
      guest: {
        name: "David Park",
        location: "Seoul, South Korea",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        stayDate: "December 2024"
      },
      experience: "Seasonal Celebrations",
      story: `The holiday gala was spectacular - like stepping into a fairytale. The attention to detail in the decorations, the quality of entertainment, and the way the staff made every guest feel special was remarkable. It wasn't just a party; it was a carefully orchestrated experience that created lasting memories for our entire family.`,
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 5,
      highlight: "Magical holiday celebrations"
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % guestStories?.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + guestStories?.length) % guestStories?.length);
  };

  const currentStory = guestStories?.[activeStory];

  return (
    <section className="py-20 bg-muted">
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
            Guest Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Authentic experiences shared by our guests, showcasing the transformative power of curated luxury
          </p>
        </motion.div>

        {/* Story Showcase */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="luxury-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Story Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Guest Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <Image
                      src={currentStory?.guest?.avatar}
                      alt={currentStory?.guest?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {currentStory?.guest?.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {currentStory?.guest?.location} • {currentStory?.guest?.stayDate}
                    </p>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {currentStory?.experience}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentStory?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-secondary fill-current" />
                  ))}
                </div>

                {/* Story Text */}
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{currentStory?.story}"
                </blockquote>

                {/* Highlight */}
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Sparkles" size={16} />
                  <span className="text-sm font-medium">{currentStory?.highlight}</span>
                </div>
              </div>

              {/* Story Images */}
              <div className="relative h-96 lg:h-auto">
                <div className="grid grid-cols-2 gap-2 h-full p-4">
                  {currentStory?.images?.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${currentStory?.guest?.name}'s experience ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 elegant-transition"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevStory}
              className="w-12 h-12 bg-card hover:bg-muted rounded-full flex items-center justify-center elegant-transition shadow-lg"
              aria-label="Previous story"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Story Indicators */}
            <div className="flex space-x-2">
              {guestStories?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-3 h-3 rounded-full elegant-transition ${
                    index === activeStory ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="w-12 h-12 bg-card hover:bg-muted rounded-full flex items-center justify-center elegant-transition shadow-lg"
              aria-label="Next story"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Create Your Own Story
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of discerning travelers and share your unique experiences at Luxe Haven
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium elegant-transition">
              Share Your Story
            </button>
            <button className="text-primary hover:text-primary/80 font-medium elegant-transition">
              View All Stories →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestStoriesSection;