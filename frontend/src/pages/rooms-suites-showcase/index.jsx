import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MoodSelector from './components/MoodSelector';
import RoomCard from './components/RoomCard';
import RoomModal from './components/RoomModal';
import FilterSidebar from './components/FilterSidebar';
import SeasonalPackages from './components/SeasonalPackages';
import ComparisonTool from './components/ComparisonTool';

const RoomsSuitesShowcase = () => {
  const [selectedMood, setSelectedMood] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  
  const [filters, setFilters] = useState({
    priceRange: null,
    roomTypes: [],
    amenities: [],
    guests: 1,
    checkIn: '',
    checkOut: ''
  });

  // Mock room data
  const rooms = [
    {
      id: 1,
      name: "Heritage Suite",
      type: "Heritage Suite",
      size: "650 sq ft",
      view: "Historic Courtyard",
      occupancy: "2 guests",
      bedType: "King Bed",
      price: 850,
      rating: 4.9,
      reviewCount: 127,
      mood: ['cultural', 'romantic'],
      specialOffer: "20% Off",
      description: `Step into history with our Heritage Suite, where original architectural details meet contemporary luxury. This spacious suite features exposed brick walls, restored hardwood floors, and period furnishings that tell the story of our building's rich past.\n\nThe suite includes a separate living area with antique furniture, a marble bathroom with clawfoot tub, and exclusive access to our heritage collection library.`,
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
      ],
      features: [
        "Original 19th-century architecture",
        "Separate living and sleeping areas",
        "Marble bathroom with clawfoot tub",
        "Heritage collection library access",
        "Complimentary historical tour"
      ],
      amenities: [
        { name: "High-Speed WiFi", icon: "Wifi", description: "Complimentary fiber internet" },
        { name: "Smart TV", icon: "Tv", description: "65-inch 4K display" },
        { name: "Fireplace", icon: "Flame", description: "Gas fireplace with seating area" },
        { name: "Minibar", icon: "Coffee", description: "Premium beverages and snacks" },
        { name: "Room Service", icon: "Bell", description: "24/7 in-room dining" },
        { name: "Concierge", icon: "Phone", description: "Personal concierge service" },
        { name: "Turndown Service", icon: "Bed", description: "Evening turndown with chocolates" },
        { name: "Luxury Toiletries", icon: "Sparkles", description: "Artisan bath products" }
      ],
      reviews: [
        {
          name: "Sarah Mitchell",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          rating: 5,
          date: "December 2024",
          comment: "Absolutely stunning suite with incredible historical character. The attention to detail is remarkable and the staff made our anniversary truly special."
        },
        {
          name: "James Wilson",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          rating: 5,
          date: "November 2024",
          comment: "Perfect blend of history and modern luxury. The heritage library was a wonderful touch and the room exceeded all expectations."
        }
      ]
    },
    {
      id: 2,
      name: "Contemporary Penthouse",
      type: "Penthouse",
      size: "1200 sq ft",
      view: "City Skyline",
      occupancy: "4 guests",
      bedType: "King + Sofa Bed",
      price: 1250,
      rating: 4.8,
      reviewCount: 89,
      mood: ['business', 'celebration'],
      description: `Experience the pinnacle of modern luxury in our Contemporary Penthouse, featuring floor-to-ceiling windows with breathtaking city views. This expansive suite combines sleek design with cutting-edge technology for the ultimate urban retreat.\n\nThe penthouse includes a private terrace, gourmet kitchenette, and dedicated workspace, making it perfect for both leisure and business travelers.`,
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
      ],
      features: [
        "Private terrace with city views",
        "Gourmet kitchenette",
        "Dedicated workspace",
        "Smart home automation",
        "Premium entertainment system"
      ],
      amenities: [
        { name: "High-Speed WiFi", icon: "Wifi", description: "Gigabit fiber connection" },
        { name: "Smart TV", icon: "Tv", description: "75-inch OLED display" },
        { name: "Kitchenette", icon: "ChefHat", description: "Full appliances and cookware" },
        { name: "Work Desk", icon: "Briefcase", description: "Executive workspace" },
        { name: "Terrace", icon: "Home", description: "Private outdoor space" },
        { name: "Sound System", icon: "Volume2", description: "Premium audio throughout" },
        { name: "Climate Control", icon: "Thermometer", description: "Individual zone control" },
        { name: "Butler Service", icon: "Bell", description: "Dedicated butler available" }
      ],
      reviews: [
        {
          name: "Michael Chen",
          avatar: "https://randomuser.me/api/portraits/men/28.jpg",
          rating: 5,
          date: "January 2025",
          comment: "Incredible penthouse with amazing views. The terrace was perfect for morning coffee and the smart home features made everything so convenient."
        }
      ]
    },
    {
      id: 3,
      name: "Romantic Garden Suite",
      type: "Junior Suite",
      size: "450 sq ft",
      view: "Private Garden",
      occupancy: "2 guests",
      bedType: "Queen Bed",
      price: 650,
      rating: 4.9,
      reviewCount: 156,
      mood: ['romantic'],
      specialOffer: "Honeymoon Special",
      description: `Escape to romance in our Garden Suite, featuring direct access to a private garden sanctuary. This intimate suite is designed for couples seeking a peaceful retreat with nature-inspired luxury.\n\nThe suite includes a cozy sitting area, marble bathroom with rain shower, and complimentary champagne service for special occasions.`,
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
      ],
      features: [
        "Private garden access",
        "Romantic décor and lighting",
        "Marble bathroom with rain shower",
        "Complimentary champagne service",
        "Rose petal turndown available"
      ],
      amenities: [
        { name: "Garden Access", icon: "Flower", description: "Private garden terrace" },
        { name: "Rain Shower", icon: "Droplets", description: "Luxury rainfall shower" },
        { name: "Champagne Service", icon: "Wine", description: "Welcome champagne" },
        { name: "Romantic Lighting", icon: "Lightbulb", description: "Dimmable ambient lighting" },
        { name: "Plush Robes", icon: "Shirt", description: "His and hers bathrobes" },
        { name: "Luxury Toiletries", icon: "Sparkles", description: "Romantic spa products" }
      ],
      reviews: [
        {
          name: "Emma Rodriguez",
          avatar: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 5,
          date: "December 2024",
          comment: "Perfect for our anniversary! The private garden was magical and the champagne service was a lovely touch. Highly recommend for couples."
        }
      ]
    },
    {
      id: 4,
      name: "Executive Business Suite",
      type: "Executive Suite",
      size: "550 sq ft",
      view: "Business District",
      occupancy: "2 guests",
      bedType: "King Bed",
      price: 750,
      rating: 4.7,
      reviewCount: 203,
      mood: ['business'],
      description: `Designed for the modern business traveler, our Executive Suite combines productivity with comfort. Located on executive floors with dedicated check-in and enhanced services.\n\nFeatures include a spacious work area, high-speed connectivity, and access to the executive lounge with complimentary breakfast and evening cocktails.`,
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ],
      features: [
        "Executive floor privileges",
        "Dedicated workspace",
        "Executive lounge access",
        "Express check-in/out",
        "Complimentary business center"
      ],
      amenities: [
        { name: "Executive Lounge", icon: "Coffee", description: "Complimentary breakfast & cocktails" },
        { name: "Work Desk", icon: "Briefcase", description: "Large executive desk" },
        { name: "High-Speed WiFi", icon: "Wifi", description: "Business-grade internet" },
        { name: "Printer Access", icon: "Printer", description: "In-room printing service" },
        { name: "Express Service", icon: "Zap", description: "Priority check-in/out" },
        { name: "Meeting Room", icon: "Users", description: "Small meeting room access" }
      ],
      reviews: [
        {
          name: "David Thompson",
          avatar: "https://randomuser.me/api/portraits/men/38.jpg",
          rating: 5,
          date: "January 2025",
          comment: "Perfect for business travel. The executive lounge was excellent and the workspace was exactly what I needed for productive meetings."
        }
      ]
    },
    {
      id: 5,
      name: "Celebration Presidential Suite",
      type: "Presidential Suite",
      size: "1500 sq ft",
      view: "Panoramic City",
      occupancy: "6 guests",
      bedType: "King + 2 Queens",
      price: 1850,
      rating: 5.0,
      reviewCount: 45,
      mood: ['celebration'],
      specialOffer: "VIP Package",
      description: `Our most luxurious accommodation, the Presidential Suite is designed for life's most important celebrations. This palatial suite features multiple bedrooms, a grand living area, and personalized service that creates unforgettable memories.\n\nIncludes dedicated butler service, private dining options, and exclusive access to our VIP amenities and experiences.`,
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop"
      ],
      features: [
        "Multiple bedrooms and bathrooms",
        "Grand living and dining areas",
        "Dedicated butler service",
        "Private dining options",
        "VIP amenities access"
      ],
      amenities: [
        { name: "Butler Service", icon: "Bell", description: "24/7 personal butler" },
        { name: "Private Dining", icon: "ChefHat", description: "In-suite chef service" },
        { name: "Grand Piano", icon: "Music", description: "Baby grand piano" },
        { name: "Wine Cellar", icon: "Wine", description: "Private wine selection" },
        { name: "Spa Services", icon: "Sparkles", description: "In-suite spa treatments" },
        { name: "Limousine", icon: "Car", description: "Complimentary airport transfer" }
      ],
      reviews: [
        {
          name: "Victoria Sterling",
          avatar: "https://randomuser.me/api/portraits/women/42.jpg",
          rating: 5,
          date: "December 2024",
          comment: "Absolutely extraordinary experience for our wedding anniversary. The butler service was impeccable and every detail was perfect."
        }
      ]
    },
    {
      id: 6,
      name: "Cultural Heritage Room",
      type: "Deluxe Room",
      size: "350 sq ft",
      view: "Historic Street",
      occupancy: "2 guests",
      bedType: "Queen Bed",
      price: 450,
      rating: 4.6,
      reviewCount: 178,
      mood: ['cultural'],
      description: `Immerse yourself in local culture with our Heritage Room, featuring authentic regional artwork, traditional furnishings, and cultural amenities. Perfect for travelers seeking an authentic connection to our destination.\n\nIncludes complimentary cultural guidebook, local artisan welcome gifts, and priority booking for cultural experiences.`,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ],
      features: [
        "Authentic regional artwork",
        "Traditional furnishings",
        "Cultural guidebook included",
        "Local artisan welcome gifts",
        "Priority cultural bookings"
      ],
      amenities: [
        { name: "Cultural Artwork", icon: "Palette", description: "Local artist collections" },
        { name: "Traditional Décor", icon: "Home", description: "Regional design elements" },
        { name: "Cultural Guide", icon: "Book", description: "Comprehensive local guide" },
        { name: "Artisan Gifts", icon: "Gift", description: "Handcrafted welcome items" },
        { name: "Experience Booking", icon: "Calendar", description: "Priority cultural tours" }
      ],
      reviews: [
        {
          name: "Robert Kim",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          rating: 5,
          date: "November 2024",
          comment: "Loved the authentic cultural touches throughout the room. The local artwork was beautiful and the cultural guide was incredibly helpful."
        }
      ]
    }
  ];

  // Filter rooms based on mood and filters
  const filteredRooms = rooms?.filter(room => {
    // Mood filter
    if (selectedMood !== 'all' && !room?.mood?.includes(selectedMood)) {
      return false;
    }
    
    // Price range filter
    if (filters?.priceRange) {
      const ranges = {
        budget: { min: 0, max: 300 },
        mid: { min: 300, max: 600 },
        luxury: { min: 600, max: 1000 },
        premium: { min: 1000, max: 9999 }
      };
      const range = ranges?.[filters?.priceRange];
      if (room?.price < range?.min || room?.price > range?.max) {
        return false;
      }
    }
    
    // Room type filter
    if (filters?.roomTypes?.length > 0 && !filters?.roomTypes?.includes(room?.type)) {
      return false;
    }
    
    // Amenities filter
    if (filters?.amenities?.length > 0) {
      const roomAmenityIds = room?.amenities?.map(a => a?.name?.toLowerCase()?.replace(/[^a-z]/g, ''));
      const hasAllAmenities = filters?.amenities?.every(amenityId => 
        roomAmenityIds?.some(roomAmenityId => roomAmenityId?.includes(amenityId))
      );
      if (!hasAllAmenities) {
        return false;
      }
    }
    
    return true;
  });

  // Sort rooms
  const sortedRooms = [...filteredRooms]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'rating':
        return b?.rating - a?.rating;
      case 'size':
        return parseInt(b?.size) - parseInt(a?.size);
      default:
        return 0;
    }
  });

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleBookNow = (room) => {
    // Mock booking functionality
    alert(`Booking ${room?.name} for $${room?.price}/night`);
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'size', label: 'Largest First' }
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Rooms & Suites - Luxe Haven Hotel</title>
        <meta name="description" content="Discover our collection of luxury accommodations, from intimate heritage suites to grand penthouses. Each room is designed to create unforgettable experiences." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Luxury Accommodations
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover our curated collection of rooms and suites, each designed to create 
                unforgettable experiences that reflect your travel purpose and personal style.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Check Availability
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Concierge Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mood Selector */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <MoodSelector 
              selectedMood={selectedMood}
              onMoodChange={setSelectedMood}
            />
          </div>
        </section>

        {/* Seasonal Packages */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <SeasonalPackages />
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar */}
              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
              />
              
              {/* Main Content */}
              <div className="flex-1">
                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Available Rooms
                    </h2>
                    <p className="text-muted-foreground">
                      {sortedRooms?.length} room{sortedRooms?.length !== 1 ? 's' : ''} available
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {/* View Mode Toggle */}
                    <div className="flex items-center bg-muted rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md elegant-transition ${
                          viewMode === 'grid' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                        }`}
                      >
                        <Icon name="Grid3X3" size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md elegant-transition ${
                          viewMode === 'list' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                        }`}
                      >
                        <Icon name="List" size={16} />
                      </button>
                    </div>
                    
                    {/* Sort Dropdown */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e?.target?.value)}
                      className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      {sortOptions?.map(option => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      ))}
                    </select>
                    
                    {/* Filter Toggle (Mobile) */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsFilterOpen(true)}
                      className="lg:hidden"
                      iconName="Filter"
                      iconPosition="left"
                    >
                      Filters
                    </Button>
                    
                    {/* Compare Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsComparisonOpen(true)}
                      iconName="BarChart3"
                      iconPosition="left"
                    >
                      Compare
                    </Button>
                  </div>
                </div>
                
                {/* Rooms Grid */}
                {sortedRooms?.length > 0 ? (
                  <div className={`grid gap-8 ${
                    viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' :'grid-cols-1'
                  }`}>
                    {sortedRooms?.map((room) => (
                      <RoomCard
                        key={room?.id}
                        room={room}
                        onViewDetails={handleViewDetails}
                        onBookNow={handleBookNow}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      No rooms found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your filters or search criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedMood('all');
                        setFilters({
                          priceRange: null,
                          roomTypes: [],
                          amenities: [],
                          guests: 1,
                          checkIn: '',
                          checkOut: ''
                        });
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our concierge team is standing by to help you find the perfect accommodation 
              and create a personalized experience tailored to your preferences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="secondary"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call Concierge
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Live Chat
              </Button>
            </div>
          </div>
        </section>

        {/* Room Modal */}
        <RoomModal
          room={selectedRoom}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedRoom(null);
          }}
          onBookNow={handleBookNow}
        />

        {/* Comparison Tool */}
        <ComparisonTool
          rooms={rooms}
          isOpen={isComparisonOpen}
          onClose={() => setIsComparisonOpen(false)}
        />

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Luxe Haven Hotel</h3>
                <p className="text-background/80 text-sm">
                  Where luxury meets authenticity, creating unforgettable experiences 
                  for discerning travelers.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Accommodations</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li>Heritage Suites</li>
                  <li>Contemporary Penthouses</li>
                  <li>Romantic Gardens</li>
                  <li>Executive Floors</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li>Concierge Service</li>
                  <li>Room Service</li>
                  <li>Spa & Wellness</li>
                  <li>Business Center</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li>+1 (555) 123-4567</li>
                  <li>reservations@luxehaven.com</li>
                  <li>123 Luxury Lane</li>
                  <li>Metropolitan City</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
              <p>&copy; {new Date()?.getFullYear()} Luxe Haven Hotel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RoomsSuitesShowcase;