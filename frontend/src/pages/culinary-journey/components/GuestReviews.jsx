import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GuestReviews = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedReview, setSelectedReview] = useState(null);

  const reviewFilters = [
    { id: 'all', name: 'All Reviews', count: 24 },
    { id: 'dining', name: 'Restaurant', count: 12 },
    { id: 'private', name: 'Private Dining', count: 8 },
    { id: 'events', name: 'Culinary Events', count: 4 }
  ];

  const guestReviews = [
    {
      id: 1,
      category: 'dining',
      guest: {
        name: "Sarah Mitchell",
        location: "San Francisco, CA",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        verified: true,
        visits: 3
      },
      rating: 5,
      date: "December 15, 2024",
      title: "An Unforgettable Culinary Journey",
      review: `From the moment we stepped into Luxe Haven's restaurant, we knew we were in for something special. Chef Marcus's attention to detail is extraordinary - every dish was a work of art.\n\nThe seared scallops were perfection itself, with a caramelized crust that gave way to the most tender, sweet interior. The cauliflower purée was silky smooth, and the pancetta added just the right amount of saltiness.\n\nWhat truly impressed me was how each course built upon the last, creating a narrative through flavor. The wine pairings selected by the sommelier were inspired - particularly the Chablis with the scallops.\n\nThe service was impeccable without being intrusive. Our server was knowledgeable about every ingredient and preparation method. This is destination dining at its finest.`,
      dishes: ["Seared Scallops", "Herb-Crusted Lamb", "Chocolate Soufflé"],
      highlights: ["Exceptional service", "Perfect wine pairings", "Beautiful presentation"],
      images: [
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      helpful: 23,
      response: {
        author: "Chef Marcus Beaumont",
        date: "December 16, 2024",
        message: "Thank you, Sarah, for your wonderful review! It brings me great joy to know that our culinary story resonated with you. We look forward to welcoming you back for your next culinary adventure."
      }
    },
    {
      id: 2,
      category: 'private',
      guest: {
        name: "Michael Rodriguez",
        location: "New York, NY",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        verified: true,
        visits: 1
      },
      rating: 5,
      date: "November 28, 2024",
      title: "Perfect Anniversary Celebration",
      review: `We celebrated our 10th anniversary at the Chef's Table, and it exceeded every expectation. The intimate setting allowed us to watch the culinary magic happen right before our eyes.\n\nChef Marcus personally explained each course, sharing the inspiration behind every dish. The personalized menu included elements that reflected our shared love of travel and adventure.\n\nThe highlight was definitely the custom dessert - a recreation of our wedding cake flavors in a modern, elegant presentation. My wife was moved to tears.\n\nThe wine cellar tour was fascinating, and the sommelier's knowledge was impressive. Every detail was perfect, from the custom menu cards to the rose petals on our table.\n\nThis wasn't just dinner; it was an experience we'll treasure forever.`,
      dishes: ["Custom Tasting Menu", "Anniversary Dessert", "Wine Pairings"],
      highlights: ["Personal chef interaction", "Custom menu", "Romantic atmosphere"],
      images: [
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400",
        "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      helpful: 18,
      response: {
        author: "Private Dining Team",
        date: "November 29, 2024",
        message: "Michael, thank you for choosing us for such a special milestone! Creating memorable moments for our guests is our greatest passion. Congratulations on your anniversary!"
      }
    },
    {
      id: 3,
      category: 'events',
      guest: {
        name: "Emily Chen",
        location: "Seattle, WA",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        verified: true,
        visits: 2
      },
      rating: 5,
      date: "October 20, 2024",
      title: "Incredible Cooking Class Experience",
      review: `The French Cuisine Masterclass was absolutely incredible! As someone who loves to cook, I was thrilled to learn from Chef Marcus himself.\n\nThe class was perfectly structured - we started with knife skills and basic techniques, then moved on to more complex preparations. Learning to make the mother sauces was a dream come true.\n\nWhat I appreciated most was how Chef Marcus took time with each participant, offering personalized tips and corrections. The small class size meant everyone got individual attention.\n\nThe lunch we prepared together was restaurant-quality, and I've already successfully recreated several dishes at home using the techniques I learned.\n\nThe recipe cards and notes provided are incredibly detailed. This was worth every penny and more!`,
      dishes: ["Hollandaise Sauce", "Coq au Vin", "Tarte Tatin"],
      highlights: ["Hands-on learning", "Small class size", "Take-home recipes"],
      images: [
        "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      helpful: 15,
      response: {
        author: "Chef Marcus Beaumont",
        date: "October 21, 2024",
        message: "Emily, it was a pleasure having you in the masterclass! Your enthusiasm and questions made the session even more enjoyable. Keep practicing those techniques!"
      }
    },
    {
      id: 4,
      category: 'dining',
      guest: {
        name: "David Thompson",
        location: "Los Angeles, CA",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        verified: true,
        visits: 5
      },
      rating: 5,
      date: "September 12, 2024",
      title: "Consistently Outstanding",
      review: `This is my fifth visit to Luxe Haven's restaurant, and the quality never wavers. Tonight's halibut was cooked to absolute perfection - flaky, moist, and beautifully seasoned.\n\nThe seasonal menu changes keep things exciting, and I love how they incorporate local ingredients. You can taste the difference that fresh, quality ingredients make.\n\nThe service team remembers my preferences from previous visits, which makes me feel truly valued as a guest. They know I prefer my wine slightly chilled and always have my favorite table ready.\n\nThe consistency in both food quality and service is remarkable. This is why I keep coming back and recommending Luxe Haven to all my colleagues.`,
      dishes: ["Pan-Seared Halibut", "Seasonal Vegetables", "Local Wine Selection"],
      highlights: ["Consistent quality", "Personalized service", "Fresh ingredients"],
      images: [
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      helpful: 12,
      response: {
        author: "Restaurant Manager",
        date: "September 13, 2024",
        message: "David, thank you for being such a loyal guest! Your continued trust in us means the world to our entire team. We look forward to your next visit."
      }
    },
    {
      id: 5,
      category: 'private',
      guest: {
        name: "Jennifer Walsh",
        location: "Chicago, IL",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        verified: true,
        visits: 1
      },
      rating: 5,
      date: "August 15, 2024",
      title: "Corporate Event Excellence",
      review: `We hosted our company's board dinner in the Executive Boardroom, and it was flawless from start to finish. The team handled every detail with professionalism and grace.\n\nThe menu was perfectly suited for our business setting - sophisticated but not overly complex, allowing for easy conversation. The presentation was impeccable, and the timing between courses was perfect.\n\nThe AV setup worked seamlessly for our brief presentation, and the staff was incredibly discreet during our confidential discussions.\n\nOur board members were thoroughly impressed, and several asked for the restaurant's contact information for their own events. This level of service is exactly what we needed for such an important occasion.`,
      dishes: ["Executive Menu", "Wine Selection", "Coffee Service"],
      highlights: ["Professional service", "Perfect timing", "Discreet staff"],
      images: [
        "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      helpful: 9,
      response: {
        author: "Private Dining Team",
        date: "August 16, 2024",
        message: "Jennifer, thank you for trusting us with your important corporate event. We're delighted that everything met your expectations and look forward to serving you again."
      }
    },
    {
      id: 6,
      category: 'events',
      guest: {
        name: "Robert Kim",location: "Portland, OR",avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        verified: true,
        visits: 1
      },
      rating: 4,
      date: "July 22, 2024",title: "Excellent Wine Tasting",
      review: `The summer wine tasting event was fantastic! The selection of wines was diverse and interesting, featuring both familiar favorites and exciting discoveries.\n\nSommelier Elena's knowledge is impressive - she shared fascinating stories about each vineyard and winemaker. The food pairings were thoughtfully chosen and enhanced each wine's characteristics.\n\nThe only minor issue was that the event ran a bit longer than expected, but honestly, no one seemed to mind. The atmosphere was relaxed and educational.\n\nI purchased several bottles to take home and have already recommended this experience to my wine-loving friends. Great value for the quality of wines and education provided.`,
      dishes: ["Wine Selection", "Artisan Cheese", "Charcuterie"],
      highlights: ["Knowledgeable sommelier", "Great wine selection", "Educational experience"],
      images: [
        "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400"
      ],
      helpful: 7,
      response: {
        author: "Sommelier Elena Rodriguez",date: "July 23, 2024",message: "Robert, thank you for joining us! I'm so glad you enjoyed the wine selection and learned something new. We'll work on our timing for future events."
      }
    }
  ];

  const filteredReviews = activeFilter === 'all' 
    ? guestReviews 
    : guestReviews?.filter(review => review?.category === activeFilter);

  const averageRating = guestReviews?.reduce((sum, review) => sum + review?.rating, 0) / guestReviews?.length;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="MessageSquare" size={32} className="text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-foreground">Guest Stories</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what our guests are saying about their culinary experiences at Luxe Haven. 
            Every review tells a story of exceptional moments and memorable flavors.
          </p>
        </div>

        {/* Rating Overview */}
        <div className="luxury-card p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-secondary mb-2">
                {averageRating?.toFixed(1)}
              </div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className={i < Math.floor(averageRating) ? "text-secondary fill-current" : "text-muted-foreground"}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">Based on {guestReviews?.length} reviews</p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1]?.map((rating) => {
                const count = guestReviews?.filter(review => review?.rating === rating)?.length;
                const percentage = (count / guestReviews?.length) * 100;
                return (
                  <div key={rating} className="flex items-center space-x-3">
                    <span className="text-sm text-foreground w-8">{rating}★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{count}</span>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-heading font-bold text-foreground">98%</div>
                  <p className="text-sm text-muted-foreground">Would Recommend</p>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-foreground">4.8</div>
                  <p className="text-sm text-muted-foreground">Service Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {reviewFilters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter === filter?.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter?.id)}
              className="min-w-[120px]"
            >
              <div className="flex items-center space-x-2">
                <span>{filter?.name}</span>
                <span className="text-xs opacity-75">({filter?.count})</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredReviews?.map((review) => (
            <div
              key={review?.id}
              className="luxury-card p-6 cursor-pointer luxury-hover"
              onClick={() => setSelectedReview(review)}
            >
              {/* Guest Info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={review?.guest?.avatar}
                      alt={review?.guest?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {review?.guest?.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{review?.guest?.name}</h4>
                    <p className="text-sm text-muted-foreground">{review?.guest?.location}</p>
                    <p className="text-xs text-secondary">{review?.guest?.visits} visit{review?.guest?.visits > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < review?.rating ? "text-secondary fill-current" : "text-muted-foreground"}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{review?.date}</p>
                </div>
              </div>

              {/* Review Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {review?.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {review?.review?.split('\n\n')?.[0]}
                </p>

                {/* Dishes Mentioned */}
                <div className="flex flex-wrap gap-2">
                  {review?.dishes?.slice(0, 3)?.map((dish, index) => (
                    <span
                      key={index}
                      className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                    >
                      {dish}
                    </span>
                  ))}
                </div>

                {/* Review Images */}
                {review?.images && review?.images?.length > 0 && (
                  <div className="flex space-x-2">
                    {review?.images?.slice(0, 3)?.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Review Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground">
                      <Icon name="ThumbsUp" size={14} />
                      <span>Helpful ({review?.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground">
                      <Icon name="Share" size={14} />
                      <span>Share</span>
                    </button>
                  </div>
                  <Button variant="ghost" size="sm" iconName="Eye" iconPosition="left">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Detail Modal */}
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card rounded-2xl shadow-luxury max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={selectedReview?.guest?.avatar}
                        alt={selectedReview?.guest?.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {selectedReview?.guest?.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {selectedReview?.guest?.name}
                      </h3>
                      <p className="text-muted-foreground">{selectedReview?.guest?.location}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={i < selectedReview?.rating ? "text-secondary fill-current" : "text-muted-foreground"}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">{selectedReview?.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedReview(null)}
                    iconName="X"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {selectedReview?.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {selectedReview?.review?.split('\n\n')?.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Review Images */}
                {selectedReview?.images && selectedReview?.images?.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedReview?.images?.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-3">Review Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedReview?.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <Icon name="Star" size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Restaurant Response */}
                {selectedReview?.response && (
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="MessageSquare" size={16} className="text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{selectedReview?.response?.author}</p>
                        <p className="text-sm text-muted-foreground">{selectedReview?.response?.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedReview?.response?.message}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                      <Icon name="ThumbsUp" size={16} />
                      <span>Helpful ({selectedReview?.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                      <Icon name="Share" size={16} />
                      <span>Share Review</span>
                    </button>
                  </div>
                  <Button variant="outline" iconName="Flag" iconPosition="left">
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Share Your Culinary Story
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We'd love to hear about your experience at Luxe Haven. Your feedback helps us continue 
            to create exceptional culinary moments for all our guests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" iconName="Edit" iconPosition="left" size="lg">
              Write a Review
            </Button>
            <Button variant="outline" iconName="Camera" iconPosition="left" size="lg">
              Share Photos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;