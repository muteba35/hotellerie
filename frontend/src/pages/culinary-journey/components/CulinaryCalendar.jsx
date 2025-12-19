import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CulinaryCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const culinaryEvents = {
    0: [ // January
      {
        id: 1,
        title: "New Year Wine Tasting",
        date: "January 15, 2025",
        time: "7:00 PM - 9:30 PM",
        type: "Wine Tasting",
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Ring in the new year with an exclusive tasting of premium wines from our cellar collection, featuring rare vintages and new discoveries.",
        price: "$85 per person",
        capacity: "20 guests",
        chef: "Sommelier Elena Rodriguez",
        highlights: ["Champagne reception", "5 wine tastings", "Artisan cheese pairings", "Take-home tasting notes"],
        difficulty: "Beginner Friendly",
        duration: "2.5 hours"
      },
      {
        id: 2,
        title: "Winter Comfort Cooking Class",
        date: "January 28, 2025",
        time: "2:00 PM - 5:00 PM",
        type: "Cooking Class",
        image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Learn to create hearty winter dishes that warm the soul, featuring seasonal ingredients and traditional techniques.",
        price: "$125 per person",
        capacity: "12 guests",
        chef: "Chef Marcus Beaumont",
        highlights: ["Hands-on cooking", "3-course meal preparation", "Recipe cards", "Wine pairing education"],
        difficulty: "Intermediate",
        duration: "3 hours"
      }
    ],
    1: [ // February
      {
        id: 3,
        title: "Valentine\'s Chocolate Workshop",
        date: "February 14, 2025",
        time: "6:00 PM - 8:30 PM",
        type: "Workshop",
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Create artisan chocolates and romantic desserts perfect for Valentine\'s Day celebrations with your loved one.",
        price: "$95 per person",
        capacity: "16 guests",
        chef: "Pastry Chef Isabella Chen",
        highlights: ["Chocolate tempering", "Truffle making", "Dessert plating", "Take-home creations"],
        difficulty: "Beginner Friendly",
        duration: "2.5 hours"
      },
      {
        id: 4,
        title: "French Cuisine Masterclass",
        date: "February 25, 2025",
        time: "10:00 AM - 3:00 PM",
        type: "Masterclass",
        image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Master the fundamentals of French cooking with Chef Marcus in this comprehensive hands-on masterclass.",
        price: "$185 per person",
        capacity: "8 guests",
        chef: "Chef Marcus Beaumont",
        highlights: ["Classical techniques", "Mother sauces", "Knife skills", "Professional tips"],
        difficulty: "Advanced",
        duration: "5 hours"
      }
    ],
    2: [ // March
      {
        id: 5,
        title: "Spring Foraging & Cooking",
        date: "March 20, 2025",
        time: "9:00 AM - 2:00 PM",
        type: "Outdoor Experience",
        image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Join our foraging expert to discover edible spring plants, then return to the kitchen to create a seasonal feast.",
        price: "$145 per person",
        capacity: "10 guests",
        chef: "Foraging Expert Sarah Mitchell",
        highlights: ["Guided foraging walk", "Plant identification", "Seasonal cooking", "Farm-to-table lunch"],
        difficulty: "Beginner Friendly",
        duration: "5 hours"
      }
    ]
  };

  const eventTypes = [
    { name: "All Events", color: "bg-primary", count: 0 },
    { name: "Wine Tasting", color: "bg-purple-500", count: 0 },
    { name: "Cooking Class", color: "bg-green-500", count: 0 },
    { name: "Workshop", color: "bg-orange-500", count: 0 },
    { name: "Masterclass", color: "bg-red-500", count: 0 },
    { name: "Outdoor Experience", color: "bg-blue-500", count: 0 }
  ];

  const currentEvents = culinaryEvents?.[selectedMonth] || [];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Calendar" size={32} className="text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-foreground">Culinary Calendar</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exclusive culinary events, cooking classes, and wine tastings throughout the year. 
            Each experience is designed to deepen your appreciation for exceptional cuisine.
          </p>
        </div>

        {/* Month Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {months?.map((month, index) => (
            <Button
              key={month}
              variant={selectedMonth === index ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedMonth(index)}
              className="min-w-[100px]"
            >
              {month}
            </Button>
          ))}
        </div>

        {/* Event Types Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {eventTypes?.map((type, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${type?.color}`} />
              <span className="text-sm text-muted-foreground">{type?.name}</span>
            </div>
          ))}
        </div>

        {/* Events Grid */}
        {currentEvents?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentEvents?.map((event) => (
              <div
                key={event?.id}
                className="luxury-card p-6 cursor-pointer luxury-hover"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={event?.image}
                    alt={event?.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {event?.price}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      event?.type === 'Wine Tasting' ? 'bg-purple-500' :
                      event?.type === 'Cooking Class' ? 'bg-green-500' :
                      event?.type === 'Workshop' ? 'bg-orange-500' :
                      event?.type === 'Masterclass' ? 'bg-red-500' :
                      event?.type === 'Outdoor Experience' ? 'bg-blue-500' : 'bg-primary'
                    }`}>
                      {event?.type}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                      {event?.title}
                    </h3>
                    <p className="text-sm text-secondary font-medium">{event?.chef}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {event?.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={14} className="text-secondary" />
                      <span className="text-sm text-foreground">{event?.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={14} className="text-secondary" />
                      <span className="text-sm text-foreground">{event?.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={14} className="text-secondary" />
                      <span className="text-sm text-foreground">{event?.capacity}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event?.difficulty === 'Beginner Friendly' ? 'bg-green-100 text-green-800' :
                      event?.difficulty === 'Intermediate'? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {event?.difficulty}
                    </span>
                    <span className="text-sm text-muted-foreground">{event?.duration}</span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Eye"
                    iconPosition="left"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="Calendar" size={64} className="text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              No Events Scheduled
            </h3>
            <p className="text-muted-foreground mb-6">
              We're planning exciting culinary events for {months?.[selectedMonth]}. Check back soon or contact us for private event options.
            </p>
            <Button variant="outline" iconName="Mail" iconPosition="left">
              Request Custom Event
            </Button>
          </div>
        )}

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card rounded-2xl shadow-luxury max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Image
                  src={selectedEvent?.image}
                  alt={selectedEvent?.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                  iconName="X"
                />
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-2xl font-heading font-bold text-secondary">
                    {selectedEvent?.price}
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-heading font-bold text-foreground">
                      {selectedEvent?.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                      selectedEvent?.type === 'Wine Tasting' ? 'bg-purple-500' :
                      selectedEvent?.type === 'Cooking Class' ? 'bg-green-500' :
                      selectedEvent?.type === 'Workshop' ? 'bg-orange-500' :
                      selectedEvent?.type === 'Masterclass' ? 'bg-red-500' :
                      selectedEvent?.type === 'Outdoor Experience' ? 'bg-blue-500' : 'bg-primary'
                    }`}>
                      {selectedEvent?.type}
                    </span>
                  </div>
                  <p className="text-lg text-secondary font-medium mb-4">{selectedEvent?.chef}</p>
                  <p className="text-muted-foreground leading-relaxed">{selectedEvent?.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Calendar" size={20} className="text-secondary" />
                      <div>
                        <p className="font-medium text-foreground">Date</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent?.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={20} className="text-secondary" />
                      <div>
                        <p className="font-medium text-foreground">Time</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent?.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Users" size={20} className="text-secondary" />
                      <div>
                        <p className="font-medium text-foreground">Capacity</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent?.capacity}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="BarChart" size={20} className="text-secondary" />
                      <div>
                        <p className="font-medium text-foreground">Difficulty</p>
                        <p className="text-sm text-muted-foreground">{selectedEvent?.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Star" size={18} className="text-secondary mr-2" />
                    Event Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedEvent?.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="default" fullWidth iconName="Calendar" iconPosition="left">
                    Book This Event
                  </Button>
                  <Button variant="outline" fullWidth iconName="Gift" iconPosition="left">
                    Gift This Experience
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Events Preview */}
        <div className="luxury-card p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              Exciting culinary experiences are being planned for the upcoming months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Icon name="ChefHat" size={32} className="text-secondary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Guest Chef Series</h4>
              <p className="text-sm text-muted-foreground">
                Renowned chefs from around the world will showcase their signature dishes
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Icon name="Grape" size={32} className="text-secondary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Harvest Festival</h4>
              <p className="text-sm text-muted-foreground">
                Celebrate the autumn harvest with special menus and wine pairings
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Icon name="Gift" size={32} className="text-secondary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-foreground mb-2">Holiday Workshops</h4>
              <p className="text-sm text-muted-foreground">
                Learn to create festive dishes perfect for holiday entertaining
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Never Miss a Culinary Event
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our culinary newsletter to be the first to know about new events, 
            special workshops, and exclusive dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            <Button variant="default" iconName="Mail" iconPosition="left">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryCalendar;