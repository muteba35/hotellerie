import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ChefPortrait = () => {
  const chefData = {
    name: "Chef Marcus Beaumont",
    title: "Executive Chef & Culinary Director",
    experience: "15+ Years",
    specialization: "Modern French with Local Influences",
    image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
    philosophy: `My culinary journey began in the kitchens of Lyon, where I learned that exceptional cuisine is born from the marriage of classical technique and local terroir.\n\nAt Luxe Haven, we celebrate the bounty of our region while honoring time-tested French traditions. Every dish tells a story of the land, the season, and the passionate artisans who bring ingredients from farm to table.\n\nOur philosophy is simple: respect the ingredient, honor the craft, and create moments of pure joy through food.`,
    achievements: [
      "James Beard Award Nominee 2023",
      "Michelin Guide Recognition",
      "Farm-to-Table Pioneer Award",
      "Culinary Institute of America Alumni"
    ],
    signature: "Locally-sourced ingredients, globally-inspired techniques"
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chef Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={chefData?.image}
                alt={`${chefData?.name} - Executive Chef at Luxe Haven`}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-luxury border border-border max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Award Winner</p>
                  <p className="text-sm text-muted-foreground">{chefData?.experience}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{chefData?.signature}</p>
            </div>
          </div>

          {/* Chef Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="ChefHat" size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium uppercase tracking-wider">Meet Our Chef</p>
                  <h1 className="text-4xl font-heading font-bold text-foreground">{chefData?.name}</h1>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-xl text-primary font-medium">{chefData?.title}</p>
                <p className="text-muted-foreground">{chefData?.specialization}</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground">Culinary Philosophy</h3>
              <div className="prose prose-lg max-w-none">
                {chefData?.philosophy?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">Recognition & Awards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chefData?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Star" size={16} className="text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefPortrait;